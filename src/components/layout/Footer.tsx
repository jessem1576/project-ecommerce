import { SITE_NAME } from '@/lib/constants';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
        <p className="text-sm mt-2">Designed with passion for e-commerce.</p>
      </div>
    </footer>
  );
};

export default Footer;
