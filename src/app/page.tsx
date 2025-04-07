import Navbar from './components/Navbar';
import FeaturedBook from './components/FeaturedBook';
import BookSeries from './components/BookSeries';

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 w-full z-50">
        <div className="announcement-bar">
          everything comes back to you / out now
        </div>
        <Navbar />
      </div>
      
      <div className="pt-28">
        <FeaturedBook />
        <BookSeries />
      </div>
    </main>
  );
}
