import { SITE_NAME } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="text-3xl font-headline font-bold text-primary hover:text-primary/80 transition-colors">
      {SITE_NAME}
    </Link>
  );
};

export default Logo;
