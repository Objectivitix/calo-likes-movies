import { useState } from "react";
import Hero from "../components/Hero";
import ReviewCard from "../components/ReviewCard";
import { reviewMetadata } from "../data/reviews";

export default function Home() {
  const [visible, setVisible] = useState(4);

  return (
    <>
      <Hero />

      <section>
        <h2>Reviews</h2>

        {reviewMetadata.slice(0, visible).map(r => (
          <ReviewCard key={r.slug} review={r} />
        ))}

        {visible < reviewMetadata.length && (
          <button onClick={() => setVisible(v => v + 4)}>
            Show more
          </button>
        )}
      </section>
    </>
  );
}
