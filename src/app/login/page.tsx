import type { Metadata } from 'next';
import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your Aura Attire account.',
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Welcome Back!</h1>
          <p className="text-foreground/80">
            Sign in to continue to your Aura Attire account.
          </p>
        </div>
        <LoginForm />
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
