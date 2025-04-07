import Image from 'next/image';
import Link from 'next/link';

export default function Books() {
  const books = [
    {
      title: "Everything Comes Back to You",
      image: "/images/Everything.png",
      alt: "Everything Comes Back to You book cover",
      link: "/books/everything-comes-back-to-you",
      isNew: true
    },
    {
      title: "Closer to You",
      image: "/images/Closer.png",
      alt: "Closer to You book cover",
      link: "/books/closer-to-you"
    },
    {
      title: "Make You Mine",
      image: "/images/Mine.png",
      alt: "Make You Mine book cover",
      link: "/books/make-you-mine"
    },
    {
      title: "More to This",
      image: "/images/more.png",
      alt: "More to This book cover",
      link: "/books/more-to-this"
    }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary mb-6">
            Books
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-text/80">
            Explore a collection of contemporary romance novels filled with love, growth, and second chances.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col items-center group">
              <Link 
                href={book.link}
                className="relative w-full max-w-[250px] hover-float"
              >
                <div className="relative aspect-[2/3] w-full mb-4">
                  <Image
                    src={book.image}
                    alt={book.alt}
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                  {book.isNew && (
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-serif text-primary text-center group-hover:text-secondary transition-colors">
                  {book.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Content Warnings
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Each book includes specific content warnings to help readers make informed decisions about their reading experience.
          </p>
          <Link 
            href="/content-warnings"
            className="text-primary hover:text-secondary transition-colors underline"
          >
            View general content warnings
          </Link>
        </div>
      </div>
    </div>
  );
} 