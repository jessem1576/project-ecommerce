'use server';

/**
 * @fileOverview AI flow to enrich product descriptions for SEO and customer engagement.
 *
 * - enrichProductDescription - Enriches the product description with AI.
 * - EnrichProductDescriptionInput - The input type for the enrichProductDescription function.
 * - EnrichProductDescriptionOutput - The return type for the enrichProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnrichProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  originalDescription: z.string().describe('The original product description.'),
  keywords: z.string().describe('Keywords related to the product.'),
});
export type EnrichProductDescriptionInput = z.infer<
  typeof EnrichProductDescriptionInputSchema
>;

const EnrichProductDescriptionOutputSchema = z.object({
  enrichedDescription: z.string().describe('The enriched product description.'),
  suggestedKeywords: z
    .string()
    .describe('Suggested keywords for the product.'),
  importantQualities: z
    .string()
    .describe('Important qualities identified by AI.'),
});
export type EnrichProductDescriptionOutput = z.infer<
  typeof EnrichProductDescriptionOutputSchema
>;

export async function enrichProductDescription(
  input: EnrichProductDescriptionInput
): Promise<EnrichProductDescriptionOutput> {
  return enrichProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enrichProductDescriptionPrompt',
  input: {schema: EnrichProductDescriptionInputSchema},
  output: {schema: EnrichProductDescriptionOutputSchema},
  prompt: `You are an e-commerce expert specializing in writing compelling product descriptions.

You will receive the product's name, its original description, and keywords.

Your goal is to:
1.  Enhance the original description to be more engaging for customers and optimized for SEO.
2.  Suggest additional relevant keywords.
3.  Identify important qualities that may be missing from the original description.

Product Name: {{{productName}}}
Original Description: {{{originalDescription}}}
Keywords: {{{keywords}}}

Enriched Description: 
Suggested Keywords: 
Important Qualities: `,
});

const enrichProductDescriptionFlow = ai.defineFlow(
  {
    name: 'enrichProductDescriptionFlow',
    inputSchema: EnrichProductDescriptionInputSchema,
    outputSchema: EnrichProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
