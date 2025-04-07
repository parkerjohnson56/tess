import Image from 'next/image';
import Link from 'next/link';

export default function BookSeries() {
  const books = [
    {
      title: "Everything Comes Back to You",
      image: "/images/everything.png",
      alt: "Everything Comes Back to You book cover",
      link: "/books/everything-comes-back-to-you"
    },
    {
      title: "Closer to You",
      image: "/images/closer.png",
      alt: "Closer to You book cover",
      link: "/books/closer-to-you"
    },
    {
      title: "Make You Mine",
      image: "/images/mine.png",
      alt: "Make You Mine book cover",
      link: "/books/make-you-mine"
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 md:mb-16 fade-in">
          <Image
            src="/images/heart-icon.svg"
            alt="Decorative heart icon"
            width={40}
            height={40}
            className="mb-4 md:mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            romance series
          </h2>
          <p className="text-center max-w-2xl text-base md:text-lg px-4">
            Journey through love, healing, and second chances in these heartfelt contemporary romance stories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 fade-in">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link 
                href={book.link}
                className="hover-float w-full max-w-[250px] md:max-w-[300px]"
              >
                <div className="relative aspect-[2/3] w-full mb-4">
                  <Image
                    src={book.image}
                    alt={book.alt}
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-serif text-primary text-center">
                  {book.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 