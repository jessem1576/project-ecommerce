import { redirect } from 'next/navigation';

// The main product listing is now on the home page.
// This page just redirects there.
export default function ProductsRedirectPage() {
  redirect('/');
}
