import BookPage from '@/app/components/BookPage';

export default function MakeYouMine() {
  return (
    <BookPage
      emoji="🎤"
      title="Make You Mine"
      coverImage="/images/Mine.png"
      amazonLink="https://www.amazon.com/Make-You-Mine-Tess-Keeler/dp/1794691154?ref_=ast_author_dp"
      description={`Nixon Brooks wasn't your ordinary nineteen-year-old. He was singer-songwriter of three number one albums and currently on his third world tour. Music was his passion, and nothing stood in his way of giving it 110%. Not even Rosie, his most recent ex-girlfriend incapable of handling his busy schedule.

Harper Perkins was a travel blogger who enjoyed urban and rural areas alike. While she was sometimes accompanied by her best friend, Grace, she usually rode solo in her hollowed out van equipped with everything she needed to take care of herself. She had wide open spaces and her audience to keep her company.

On a warm summer night in Kansas City, Harper is home for Nixon's concert. She's going to be front row, and Grace has convinced her to go out and celebrate. Nixon's reluctantly agreed to be his photographer's wingman for the night. When Harper catches his eye, he risks any anonymity by introducing himself.

Will Nixon's fame hinder the possibility of a future between them or will the constant distance between their traveling hearts keep them apart?`}
      contentWarnings={[]}
    />
  );
} 