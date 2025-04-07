import BookPage from '@/app/components/BookPage';

export default function EverythingComesBackToYou() {
  return (
    <BookPage
      emoji="💕"
      title="Everything Comes Back to You"
      coverImage="/images/everything.png"
      amazonLink="https://www.amazon.com/Everything-Comes-Back-Tess-Keeler-ebook/dp/B0CV531LKJ?ref_=ast_author_dp"
      description={`River and Aiden had been inseparable since Aiden's family moved in next door to their West Seattle home, nearly seven years prior to their senior year of high school. River Saxton was a seventeen-year-old who loved music and comics. Aiden Jacobs was a sixteen-year-old who loved painting and girls. They both bonded over their dysfunctional families and the love they shared for their small group of friends.

After another uneasy breakup and a moment of vulnerability, Aiden was in River's room, and suddenly they were kissing. With River's innocence and Aiden's identity on the line, two best friends struggle to define the line between friends and lovers. When River leaves for an incredible opportunity in Florida, Aiden wonders what more he could have done to keep his best friend from moving on.

Five years of experience, growth, and suffering pass before they see or speak to each other again. River moves back home, but he's brought someone with him. Aiden wedges himself in the middle of everything. Are they getting a second chance at friendship, love, or both?`}
      contentWarnings={[
        "abuse",
        "cheating",
        "homophobia"
      ]}
    />
  );
} 