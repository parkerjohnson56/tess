import Image from 'next/image';

export default function BookSeries() {
  const books = [
    {
      title: "Everything Comes Back to You",
      image: "/images/everything.png",
      alt: "Everything Comes Back to You book cover"
    },
    {
      title: "Closer to You",
      image: "/images/closer.png",
      alt: "Closer to You book cover"
    },
    {
      title: "Make You Mine",
      image: "/images/makeyoumine.png",
      alt: "Make You Mine book cover"
    }
  ];

  return (
    <section className="w-full py-16 px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 fade-in">
          <Image
            src="/images/heart-icon.svg"
            alt="Decorative heart icon"
            width={40}
            height={40}
            className="mb-6"
          />
          <h2 className="text-5xl font-serif text-primary mb-4">
            romance series
          </h2>
          <p className="text-center max-w-2xl text-lg">
            Journey through love, healing, and second chances in these heartfelt contemporary romance stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col items-center hover-float">
              <Image
                src={book.image}
                alt={book.alt}
                width={300}
                height={450}
                className="rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-serif text-primary text-center">
                {book.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 