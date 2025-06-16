"use client";

import Link from 'next/link';
import { ShoppingCart, Home, Info, Mail, Package } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/products', label: 'Products', icon: Package },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: Mail },
];

const Header = () => {
  const { itemCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav className="flex items-center space-x-4 md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1",
                pathname === link.href && "text-primary"
              )}
            >
              <link.icon size={18} className="hidden md:inline-block" />
              {link.label}
            </Link>
          ))}
          <Button variant="ghost" size="icon" asChild className="relative hover:bg-accent/20">
            <Link href="/cart">
              <ShoppingCart className="text-foreground hover:text-primary transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
