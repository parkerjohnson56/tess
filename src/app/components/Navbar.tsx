import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-8 bg-background">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <div className="flex space-x-12">
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
        
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-5xl font-serif text-[#4A2545] hover:text-primary transition-colors">
            Tess & Saundra
          </h1>
        </Link>

        <div className="invisible">
          {/* This is to balance the layout */}
          <div className="w-[200px]" />
        </div>
      </div>
    </nav>
  );
} 