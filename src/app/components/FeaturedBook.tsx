import Image from 'next/image';
import Link from 'next/link';
import WaveBackground from './WaveBackground';

export default function FeaturedBook() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center py-8 md:py-16">
      <WaveBackground />
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Book Cover */}
        <Link 
          href="https://www.amazon.com/Everything-Comes-Back-Tess-Keeler-ebook/dp/B0CV531LKJ"
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[2/3] max-w-[300px] md:max-w-md mx-auto w-full hover-float order-1 md:order-none"
        >
          <Image
            src="/images/Everything.png"
            alt="Everything Comes Back to You book cover"
            fill
            className="object-cover rounded-lg shadow-2xl"
            priority
          />
        </Link>

        {/* Book Info */}
        <div className="text-center md:text-left fade-in order-2 md:order-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 title-gradient">
            Everything Comes Back to You
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-prose mx-auto md:mx-0">
            A second chance romance about finding yourself, and finding your way back to the one who got away.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/books/everything-comes-back-to-you"
              className="button-outline w-full sm:w-auto text-center"
            >
              explore
            </Link>
            <Link
              href="https://www.amazon.com/Everything-Comes-Back-Tess-Keeler-ebook/dp/B0CV531LKJ"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary w-full sm:w-auto text-center"
            >
              buy now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 