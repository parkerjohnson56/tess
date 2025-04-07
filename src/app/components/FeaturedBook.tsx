import Image from 'next/image';

export default function FeaturedBook() {
  return (
    <section className="w-full py-24 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between fade-in">
        <div className="flex flex-col items-center md:items-start md:max-w-xl">
          <div className="mb-12">
            <Image
              src="/images/heart-icon.svg"
              alt="Heart icon"
              width={60}
              height={60}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          <h2 className="text-7xl font-serif title-gradient mb-8 text-center md:text-left">
            Everything Comes Back to You
          </h2>

          <p className="text-center md:text-left max-w-2xl mb-12 text-xl leading-relaxed">
            Best friends River and Aiden shared everything—from comic books to family struggles—until 
            one vulnerable moment changed it all. After five years apart, River returns home, but he's 
            not alone. As Aiden finds himself drawn back into River's orbit, they both must confront 
            their past to discover if some loves are meant for a second chance.
          </p>

          <div className="flex space-x-6">
            <button className="button-outline">
              explore
            </button>
            <button className="button-primary">
              buy now
            </button>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:ml-12 hover-float">
          <Image
            src="/images/everything.png"
            alt="Everything Comes Back to You book cover"
            width={400}
            height={600}
            className="rounded-lg shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
} 