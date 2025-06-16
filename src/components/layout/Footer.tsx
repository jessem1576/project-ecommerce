import { SITE_NAME } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-conditions', label: 'Terms & Conditions' },
    { href: '/return-policy', label: 'Return Policy' },
    { href: '/shipping-policy', label: 'Shipping Policy' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <p className="text-lg">&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
          <p className="text-sm mt-1">Designed with passion for e-commerce.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-secondary-foreground/80 hover:text-primary hover:underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
