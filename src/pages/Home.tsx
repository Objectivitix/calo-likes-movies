import { useState } from "react";
import Hero from "../components/Hero";
import ReviewCard from "../components/ReviewCard";
import { reviewMetadata } from "../data/reviews";

export default function Home() {
  const [visible, setVisible] = useState(4);

  return (
    <>
      <Hero />

      <section className="reviews-section">
        <h2 className="reviews-section__title">Reviews</h2>

        <div className="reviews-section__grid">
          {reviewMetadata.slice(0, visible).map(r => (
            <ReviewCard key={r.slug} review={r} />
          ))}
        </div>

        {visible < reviewMetadata.length && (
          <button
            className="show-more-button"
            onClick={() => setVisible(v => v + 4)}
          >
            Show more
          </button>
        )}
      </section>
    </>
  );
}
