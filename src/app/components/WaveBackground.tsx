'use client';

import { useEffect, useRef } from 'react';

export default function WaveBackground() {
  const waveRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const wave = waveRef.current;
    const container = containerRef.current;
    if (!wave || !container) return;

    const amplitude = 20; // Wave height
    const frequency = 0.01; // Wave frequency
    const speed = 0.1; // Animation speed

    function updateWave(timestamp: number) {
      if (!container || !wave) return;
      
      // Update time for continuous wave movement
      const timeDelta = timestamp - timeRef.current;
      timeRef.current = timestamp;
      const time = timestamp * speed * 0.001;
      
      const points = [];
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      
      // Calculate fill level based on scroll position
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress
      let scrollProgress = 0;
      if (rect.top < viewportHeight * 0.8) { // Start when section is 80% up the viewport
        scrollProgress = Math.min(Math.abs(rect.top) / (viewportHeight * 0.3), 1);
      }
      
      // Fill from bottom to top
      const fillLevel = 1 - (scrollProgress * 0.9); // Start at bottom (1) and fill up to 0.1
      const baseY = height * fillLevel;
      
      // Create multiple overlapping waves
      for (let x = 0; x <= width; x += 10) {
        const xFreq = x * frequency;
        // Faster wave movement
        const y1 = amplitude * Math.sin(xFreq + time * 3);
        const y2 = (amplitude * 0.5) * Math.sin(xFreq * 2 + time * 4);
        const y = y1 + y2;
        points.push(`${x},${y + baseY}`);
      }

      // Create the wave path with a fill below
      const path = `
        M 0,${height}
        L 0,${baseY}
        L ${points.join(' L ')}
        L ${width},${baseY}
        L ${width},${height}
        Z
      `;
      
      wave.setAttribute('d', path);
      animationRef.current = requestAnimationFrame(updateWave);
    }

    function onScroll() {
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(updateWave);
      }
    }

    function onResize() {
      if (!container || !wave) return;
      updateWave(timeRef.current);
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    animationRef.current = requestAnimationFrame(updateWave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <svg 
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <path
          ref={waveRef}
          fill="url(#wave-gradient)"
          className="transition-[d] duration-300 ease-in-out"
        />
      </svg>
    </div>
  );
} 