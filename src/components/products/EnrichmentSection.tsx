"use client";

import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { enrichProductDetailsAction } from '@/app/actions';
import type { EnrichedProductInfo } from '@/types';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface EnrichmentSectionProps {
  initialProductName: string;
  initialBaseDescription: string;
}

const EnrichmentSection = ({ initialProductName, initialBaseDescription }: EnrichmentSectionProps) => {
  const [productName, setProductName] = useState(initialProductName);
  const [baseDescription, setBaseDescription] = useState(initialBaseDescription);
  const [keywords, setKeywords] = useState('');
  const [enrichedInfo, setEnrichedInfo] = useState<EnrichedProductInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleEnrichment = () => {
    setError(null);
    setEnrichedInfo(null);
    startTransition(async () => {
      const result = await enrichProductDetailsAction(productName, baseDescription, keywords);
      if ('error' in result) {
        setError(result.error);
      } else {
        setEnrichedInfo(result);
      }
    });
  };

  return (
    <Card className="mt-8 shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">AI Product Enrichment</CardTitle>
        <CardDescription>
          Use AI to enhance product descriptions, suggest keywords, and identify important qualities.
          Modify the product name or base description below to see different results.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="ai-product-name">Product Name</Label>
          <Input
            id="ai-product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ai-base-description">Base Description</Label>
          <Textarea
            id="ai-base-description"
            value={baseDescription}
            onChange={(e) => setBaseDescription(e.target.value)}
            placeholder="Enter base product description"
            rows={4}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ai-keywords">Optional Keywords (comma-separated)</Label>
          <Input
            id="ai-keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., eco-friendly, durable, best-seller"
          />
        </div>
        <Button onClick={handleEnrichment} disabled={isPending} className="w-full sm:w-auto">
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Enrich Details with AI
        </Button>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {enrichedInfo && (
          <div className="mt-6 space-y-4 p-4 border rounded-md bg-secondary/30">
            <h3 className="text-xl font-headline font-semibold text-primary">AI Enhanced Details:</h3>
            <div>
              <h4 className="font-semibold text-lg">Enriched Description:</h4>
              <p className="text-sm whitespace-pre-wrap">{enrichedInfo.enrichedDescription}</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Suggested Keywords:</h4>
              <p className="text-sm">{enrichedInfo.suggestedKeywords}</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Important Qualities:</h4>
              <p className="text-sm whitespace-pre-wrap">{enrichedInfo.importantQualities}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EnrichmentSection;
