'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface BookPageProps {
  emoji: string;
  title: string;
  coverImage: string;
  amazonLink: string;
  description: string;
  contentWarnings?: string[];
}

export default function BookPage({ 
  emoji, 
  title, 
  coverImage, 
  amazonLink, 
  description,
  contentWarnings 
}: BookPageProps) {
  const [warningsOpen, setWarningsOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Emoji and Title */}
      <div className="flex flex-col items-center mb-16 fade-in">
        <div className="text-4xl mb-6">{emoji}</div>
        <h1 className="text-5xl md:text-7xl font-serif text-primary text-center mb-8">
          {title}
        </h1>
      </div>

      {/* Book Cover */}
      <div className="flex justify-center mb-16 fade-in">
        <Image
          src={coverImage}
          alt={`${title} book cover`}
          width={500}
          height={750}
          className="rounded-lg shadow-2xl"
          priority
        />
      </div>

      {/* Buy Button */}
      <div className="flex justify-center mb-24">
        <Link
          href={amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary text-lg px-12 py-4"
        >
          where to buy
        </Link>
      </div>

      {/* About the Book */}
      <div className="mb-16">
        <h2 className="text-4xl font-serif text-primary mb-8 text-center">
          about the book
        </h2>
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Content Warnings */}
      {contentWarnings && contentWarnings.length > 0 && (
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-6">
            <button
              onClick={() => setWarningsOpen(!warningsOpen)}
              className="flex items-center text-[#8B2942] hover:text-[#6D2035] transition-colors w-full"
            >
              <span className="mr-2 text-lg">
                {warningsOpen ? '▼' : '▶'}
              </span>
              <span className="text-xl font-serif">Content warnings</span>
            </button>
            {warningsOpen && (
              <div className="mt-6 pl-6 space-y-4">
                {contentWarnings.map((warning, index) => (
                  <p key={index} className="italic text-lg text-[#8B2942]">{warning}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 