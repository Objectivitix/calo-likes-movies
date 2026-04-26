import './ReviewCard.css';
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

export default function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3 className="review-card__title">{review.title}</h3>
      <Rating rating={review.rating} />
      <p className="review-card__excerpt">{review.excerpt}</p>
      <Link to={`/review/${review.slug}`} className="review-card__link">Read more</Link>
    </div>
  );
}
