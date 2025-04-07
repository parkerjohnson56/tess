'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-background">
      <div className="announcement-bar">
        everything comes back to you / out now
      </div>
      <nav className="w-full py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            <Link href="/" className="text-text hover:text-primary transition-colors text-lg">
              home
            </Link>
            <Link href="/books" className="text-text hover:text-primary transition-colors text-lg">
              books
            </Link>
            <Link href="/about" className="text-text hover:text-primary transition-colors text-lg">
              about
            </Link>
          </div>
          
          {/* Logo - Centered on desktop, left-aligned after menu button on mobile */}
          <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <h1 className="text-3xl md:text-5xl font-serif text-[#4A2545] hover:text-primary transition-colors">
              Tess & Saundra
            </h1>
          </Link>

          {/* Spacer for desktop layout */}
          <div className="hidden md:block invisible">
            <div className="w-[200px]" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 bg-background shadow-lg z-50 mt-4`}>
          <div className="flex flex-col space-y-4 p-4">
            <Link 
              href="/" 
              className="text-text hover:text-primary transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              home
            </Link>
            <Link 
              href="/books" 
              className="text-text hover:text-primary transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              books
            </Link>
            <Link 
              href="/about" 
              className="text-text hover:text-primary transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
} 