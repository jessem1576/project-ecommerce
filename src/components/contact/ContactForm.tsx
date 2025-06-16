"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

const initialState = {
  message: null,
  errors: null,
  isSuccess: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Send Message
    </Button>
  );
}

const ContactForm = () => {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.isSuccess && state.message) {
      toast({
        title: "Success!",
        description: state.message,
      });
      // Consider resetting the form here if needed, e.g. by managing form field state manually
      // or by using a library like react-hook-form with form.reset()
    } else if (!state.isSuccess && state.message && !state.errors) { // General error
        toast({
            title: "Error",
            description: state.message,
            variant: "destructive",
        });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6 max-w-xl mx-auto bg-card p-8 rounded-lg shadow-xl">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-lg">Full Name</Label>
        <Input id="name" name="name" type="text" placeholder="John Doe" required className="text-base" />
        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-lg">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required className="text-base" />
        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-lg">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message..." rows={6} required className="text-base" />
        {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(', ')}</p>}
      </div>
      <div>
        <SubmitButton />
      </div>
      {state.message && !state.errors && !state.isSuccess && (
         <Alert variant="destructive" className="mt-4">
            <AlertTitle>Submission Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
};

export default ContactForm;
