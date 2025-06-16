
"use client";

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom'; // Corrected import
import { signupUserAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, UserPlus } from 'lucide-react';

const initialState = {
  message: null,
  errors: null,
  isSuccess: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UserPlus className="mr-2 h-4 w-4" />}
      Create Account
    </Button>
  );
}

const SignupForm = () => {
  const [state, formAction] = useActionState(signupUserAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.isSuccess) {
        toast({
          title: "Account Created!",
          description: state.message,
        });
        // In a real app, you might auto-login or redirect to login: router.push('/login')
      } else if (!state.errors) { // General error
        toast({
          title: "Signup Failed",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Sign Up</CardTitle>
        <CardDescription>Fill in the details below to create your account.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" type="text" placeholder="John Doe" required />
            {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="••••••••" required />
            {state.errors?.password && <p className="text-sm text-destructive">{state.errors.password.join(', ')}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="••••••••" required />
            {state.errors?.confirmPassword && <p className="text-sm text-destructive">{state.errors.confirmPassword.join(', ')}</p>}
          </div>
          {state.message && !state.errors && !state.isSuccess && (
             <Alert variant="destructive" className="mt-4">
                <AlertTitle>Signup Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignupForm;
