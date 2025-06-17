import type { Metadata } from 'next';
import SignupForm from '@/components/auth/SignupForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create a new Aura Attire account.',
};

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Create an Account</h1>
          <p className="text-foreground/80">
            Join Aura Attire today and start your shopping journey!
          </p>
        </div>
        <SignupForm />
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
