import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function BookSeries() {
  const books = [
    {
      title: "Everything Comes Back to You",
      image: "/images/Everything.png",
      alt: "Everything Comes Back to You book cover",
      link: "/books/everything-comes-back-to-you",
      isbn: "B0CV531LKJ",
      author: "Tess Keeler",
      datePublished: "2024-01",
      description: "A second chance romance about finding yourself, and finding your way back to the one who got away."
    },
    {
      title: "Closer to You",
      image: "/images/Closer.png",
      alt: "Closer to You book cover",
      link: "/books/closer-to-you",
      isbn: "1075829704",
      author: "Tess Keeler",
      datePublished: "2023",
      description: "The next chapter in Nixon and Harper's love story as they navigate fame, music, and their growing relationship in Nashville."
    },
    {
      title: "Make You Mine",
      image: "/images/Mine.png",
      alt: "Make You Mine book cover",
      link: "/books/make-you-mine",
      isbn: "1794691154",
      author: "Tess Keeler",
      datePublished: "2023",
      description: "A romance between a world-famous musician and a travel blogger, exploring the challenges of love on the road."
    }
  ];

  return (
    <>
      <section className="w-full py-12 md:py-16 px-4 md:px-8 bg-white/50" aria-labelledby="series-title">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12 md:mb-16 fade-in">
            <Image
              src="/images/heart-icon.svg"
              alt=""
              width={40}
              height={40}
              className="mb-4 md:mb-6"
              aria-hidden="true"
            />
            <h2 id="series-title" className="text-4xl md:text-5xl font-serif text-primary mb-4">
              Romance Series
            </h2>
            <p className="text-center max-w-2xl text-base md:text-lg px-4">
              Journey through love, healing, and second chances in these heartfelt contemporary romance stories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 fade-in" role="list">
            {books.map((book, index) => (
              <article key={index} className="flex flex-col items-center group" role="listitem">
                <Link 
                  href={book.link}
                  className="hover-float w-full max-w-[250px] md:max-w-[300px]"
                  aria-label={`Learn more about ${book.title}`}
                >
                  <div className="relative aspect-[2/3] w-full mb-4">
                    <Image
                      src={book.image}
                      alt={book.alt}
                      fill
                      className="rounded-lg shadow-lg object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-primary text-center group-hover:text-secondary transition-colors">
                    {book.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-16 fade-in">
            <Link 
              href="/books" 
              className="button-outline text-lg px-12 py-4 flex items-center space-x-2 group"
              aria-label="View all books in our collection"
            >
              <span>see more books</span>
              <svg 
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org structured data for books */}
      <Script id="book-series-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": books.map((book, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Book",
              "name": book.title,
              "author": {
                "@type": "Person",
                "name": book.author
              },
              "isbn": book.isbn,
              "datePublished": book.datePublished,
              "description": book.description,
              "image": `https://tesskeeler.com${book.image}`,
              "url": `https://tesskeeler.com${book.link}`,
              "publisher": {
                "@type": "Organization",
                "name": "Tess & Saundra Keeler"
              },
              "genre": "Romance",
              "inLanguage": "en-US"
            }
          }))
        })}
      </Script>
    </>
  );
} 