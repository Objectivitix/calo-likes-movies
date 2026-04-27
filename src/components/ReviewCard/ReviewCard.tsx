import './ReviewCard.css';
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import type { ReviewMeta } from '../../data/reviews';

interface ReviewCardProps {
  review: ReviewMeta;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const publishDate = new Date(review.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="review-card">
      <h3 className="review-card__title">{review.title}</h3>
      <Rating rating={review.rating} />
      <div className="review-card__metadata">
        <span className="review-card__year">{review.year}</span>
        <span className="review-card__separator">•</span>
        <span className="review-card__date">{publishDate}</span>
      </div>
      <p className="review-card__excerpt">{review.excerpt}</p>
      <Link to={`/review/${review.slug}`} className="review-card__link">Read more</Link>
    </div>
  );
}
