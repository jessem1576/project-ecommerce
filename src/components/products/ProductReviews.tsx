// src/components/products/ProductReviews.tsx
"use client";

import type { Review } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MessageSquare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

interface ProductReviewsProps {
  reviews: Review[];
  productId: string; // Used for potential future "add review" functionality
}

const ProductReviews = ({ reviews, productId }: ProductReviewsProps) => {
  const { toast } = useToast();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');

  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock adding review
    console.log({ productId, name: newReviewName, rating: newReviewRating, comment: newReviewComment });
    toast({
      title: "Review Submitted (Mock)",
      description: "Thank you for your feedback! Your review would appear after moderation in a real app.",
    });
    setShowReviewForm(false);
    setNewReviewName('');
    setNewReviewRating(5);
    setNewReviewComment('');
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle className="text-2xl font-headline flex items-center">
              <MessageSquare className="mr-2 h-6 w-6 text-primary" /> Customer Reviews
            </CardTitle>
            {reviews.length > 0 && (
              <div className="flex items-center gap-2 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className={i < Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"} />
                ))}
                <span className="text-lg font-semibold text-foreground/90">{averageRating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
          <Button onClick={() => setShowReviewForm(!showReviewForm)} variant="outline">
            {showReviewForm ? 'Cancel Review' : 'Write a Review'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showReviewForm && (
          <form onSubmit={handleAddReview} className="mb-8 p-6 border rounded-lg bg-secondary/30 space-y-4">
            <h3 className="text-lg font-semibold">Share Your Thoughts</h3>
            <div>
              <Label htmlFor="reviewerName">Name</Label>
              <Input id="reviewerName" value={newReviewName} onChange={(e) => setNewReviewName(e.target.value)} placeholder="Your Name" required />
            </div>
            <div>
              <Label htmlFor="reviewRating">Rating</Label>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map(star => (
                  <button type="button" key={star} onClick={() => setNewReviewRating(star)} aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}>
                    <Star size={24} className={star <= newReviewRating ? "fill-yellow-400 text-yellow-400 cursor-pointer" : "text-muted-foreground/50 hover:text-yellow-400 cursor-pointer"} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="reviewComment">Comment</Label>
              <Textarea id="reviewComment" value={newReviewComment} onChange={(e) => setNewReviewComment(e.target.value)} placeholder="Tell us about your experience..." rows={4} required />
            </div>
            <Button type="submit">Submit Review</Button>
          </form>
        )}

        {reviews.length === 0 && !showReviewForm && (
          <CardDescription className="text-center py-8">
            No reviews yet. Be the first to share your thoughts!
          </CardDescription>
        )}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 rounded-md border hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-4">
                <Avatar className="mt-1">
                  <AvatarImage src={review.avatarUrl || `https://placehold.co/40x40.png`} alt={review.author} data-ai-hint="person avatar"/>
                  <AvatarFallback>{review.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg text-foreground">{review.author}</h4>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{new Date(review.date).toLocaleDateString()}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductReviews;
