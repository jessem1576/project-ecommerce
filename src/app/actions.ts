"use server";

import { z } from 'zod';
import { enrichProductDescription, EnrichProductDescriptionInput } from '@/ai/flows/enrich-product-description';
import type { EnrichedProductInfo } from '@/types';


const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        message: "Validation failed.",
        errors: validatedFields.error.flatten().fieldErrors,
        isSuccess: false,
      };
    }
    
    // In a real app, you'd send an email here.
    // For this example, we'll just log it and simulate success.
    console.log("Contact Form Submitted:", validatedFields.data);

    return {
      message: "Thank you for your message! We'll get back to you soon.",
      errors: null,
      isSuccess: true,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again.",
      errors: null,
      isSuccess: false,
    };
  }
}

export async function enrichProductDetailsAction(
  productName: string, 
  originalDescription: string, 
  keywords: string = ''
): Promise<EnrichedProductInfo | { error: string }> {
  try {
    const input: EnrichProductDescriptionInput = {
      productName,
      originalDescription,
      keywords,
    };
    const result = await enrichProductDescription(input);
    return {
      enrichedDescription: result.enrichedDescription,
      suggestedKeywords: result.suggestedKeywords,
      importantQualities: result.importantQualities,
    };
  } catch (error) {
    console.error("Error enriching product details:", error);
    return { error: "Failed to enrich product details. Please try again." };
  }
}
