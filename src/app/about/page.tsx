"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const tessImages = [
    { src: "/images/tess.png", alt: "Tess Keeler" },
    { src: "/images/tess2.png", alt: "Tess Keeler" },
    { src: "/images/tess3.png", alt: "Tess Keeler" }
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prev) => (prev + 1) % tessImages.length);
      }
    }, 3000); // Change image every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, tessImages.length]);

  const nextImage = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentImageIndex((prev) => (prev + 1) % tessImages.length);
  };

  const prevImage = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentImageIndex((prev) => (prev - 1 + tessImages.length) % tessImages.length);
  };

  const tessFacts = [
    "Watching Stranger Things on repeat",
    "Following my pets around with my camera like they're celebrities",
    "Coming up with another reason why '...we should be vegan'",
    "Plotting trips to see concerts many states away",
    "Taking quizzes online to ensure I'm still a Hufflepuff",
    "Searching baby names for new characters",
    "Fantasizing about more tattoos",
    "Crying over neglected and abused animals on social media",
    "Trying to kick my caffeine/sugar addiction",
    "Researching all things that peak my interest"
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary mb-6">
            Meet the Authors
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-text/80">
            Let's get to know each other!
          </p>
        </div>

        {/* Tess's Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-primary">Tess Keeler</h2>
              <p className="text-lg leading-relaxed">
                I spend a good amount of my time with my wife, writing stories and binge-watching our favorite shows. 
                When I'm not writing, you can find me spending time with our furry family - capturing every adorable moment 
                of our cats and dogs on camera.
              </p>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Currently...</h3>
                <ul className="space-y-3">
                  {tessFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-2">✦</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div 
              className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-xl group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Image Carousel */}
              <div className="relative w-full h-full">
                <Image
                  src={tessImages[currentImageIndex].src}
                  alt={tessImages[currentImageIndex].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {tessImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white w-4' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link 
              href="https://instagram.com/tsmkeeler" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-text hover:text-secondary transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow our journey @tsmkeeler</span>
            </Link>
          </div>
        </div>

        {/* Saundra's Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-white">
                  Photo Coming Soon
                </div>
              </div>
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mt-8">
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-white">
                  Photo Coming Soon
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-serif text-primary">Saundra Keeler</h2>
              <p className="text-lg leading-relaxed">
                Bio coming soon...
              </p>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Fun Facts</h3>
                <p className="text-lg text-text/80 italic">More details coming soon...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Thank you for being here. We can't wait to hear what you think about our work.
          </p>
          <Link 
            href="/books" 
            className="button-primary inline-block"
          >
            explore our books
          </Link>
        </div>
      </div>
    </div>
  );
} 