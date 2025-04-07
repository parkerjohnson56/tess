import BookPage from '@/app/components/BookPage';

export default function CloserToYou() {
  return (
    <BookPage
      emoji="🎸"
      title="Closer to You"
      coverImage="/images/closer.png"
      amazonLink="https://www.amazon.com/Closer-Nixon-Brooks-Tess-Keeler/dp/1075829704?ref_=ast_author_dp"
      description={`Harper and Nixon found their way back to each other. They are starting their next adventure in Nashville while Nixon works on his fourth album. The two of them are adjusting to living together in a new city, with an uninvited, but not unwelcome, roommate: Mason. As their relationship matures, new obstacles stand in their way.

Harper's been photographed at the Grammys with Nixon, and she's gone from a nobody to somebody. After Nixon admitted to having a girlfriend, his fans knew her face. Not her van. Not his studio. Now all of that has changed. Nixon's only growing more popular, and Harper's losing time deciding if her career is worth the risk of being caught in a threatening situation.

The non-stop buzz of Nixon and Harper's blossoming relationship attracts the attention of jealous exes and resentful best friends. Will their hostile attempts to tear them apart put a crack in their newly formed foundation or make them stronger?`}
      contentWarnings={[
        "stalking",
        "harassment"
      ]}
    />
  );
} 