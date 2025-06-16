
"use client";

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom'; // Corrected import
import { loginUserAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, LogIn } from 'lucide-react';
import Link from 'next/link';

const initialState = {
  message: null,
  errors: null,
  isSuccess: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
      Login
    </Button>
  );
}

const LoginForm = () => {
  const [state, formAction] = useActionState(loginUserAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.isSuccess) {
        toast({
          title: "Login Successful!",
          description: state.message,
        });
        // In a real app, you'd redirect here, e.g., router.push('/dashboard')
      } else if (!state.errors) { // General error (not validation)
        toast({
          title: "Login Failed",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Sign In</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
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
          <div className="flex items-center justify-between text-sm">
            <Link href="#" className="text-primary hover:underline">
                Forgot password?
            </Link>
          </div>

          {state.message && !state.errors && !state.isSuccess && (
            <Alert variant="destructive" className="mt-4">
                <AlertTitle>Login Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
