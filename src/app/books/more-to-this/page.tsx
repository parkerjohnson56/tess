import BookPage from '@/app/components/BookPage';

export default function MoreToThis() {
  return (
    <BookPage
      emoji="💫"
      title="More to This"
      coverImage="/images/more.png"
      amazonLink="https://www.amazon.com/More-This-Tess-Keeler/dp/B0CV531LKJ"
      description={`Henley Moore was coasting by as the average self-destructive college student. When he wasn't partying with his twin brother's friends in Boulder, Colorado or meeting a new face to love for the night, he was trying not to think of the girl that hurt him for the first and last time. His first of everything…Or so he thought.

Everly Parker was dedicated to her studies and herself. Nothing could stop her from achieving what she wanted out of life, and she knew that avoiding relationships all together was her best bet. Mason Thomas, her only friend, was exhausting enough for her. She didn't need to think about guys or sex. The big picture was easier without all that.

Until she meets Henley.

Will Henley be the first man Everly lets into her heart or will he be just another man after the chase?`}
      contentWarnings={[
        "sexual content",
        "alcohol use",
        "drug references",
        "self-destructive behavior"
      ]}
    />
  );
} 