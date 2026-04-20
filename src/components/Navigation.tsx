'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const mainNavLinks = [
  { href: '/product-work', label: 'Product' },
  { href: '/experimental-projects', label: 'Experiments' },
  { href: '/perspectives', label: 'Research & Analysis' },
  { href: '/creative-work', label: 'Art' },
  { href: '/about', label: 'About' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = pathname === '/';

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-sm border-b border-sand/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo/Name - links to home, hidden on homepage */}
          <Link
            href="/"
            className={`text-lg md:text-xl font-medium tracking-tight text-auburn hover:text-terracotta transition-colors ${
              isHomePage ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            Tyler James
          </Link>

          {/* Desktop: Main navigation (right-aligned) */}
          <div className="hidden md:flex items-center gap-8">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 relative group ${
                  isActive(link.href)
                    ? 'text-auburn'
                    : 'text-warmgray hover:text-auburn'
                }`}
              >
                {link.label}
                {/* Active indicator */}
                <span 
                  className={`absolute -bottom-1 left-0 h-px bg-terracotta transition-all duration-200 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </Link>
            ))}
          </div>

          {/* Mobile: Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-auburn hover:text-terracotta transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-t border-sand">
          <div className="flex flex-col py-4 px-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 text-sm tracking-wide transition-colors duration-200 border-b border-sand/50 last:border-0 ${
                  isActive(link.href)
                    ? 'text-auburn'
                    : 'text-warmgray hover:text-auburn'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
