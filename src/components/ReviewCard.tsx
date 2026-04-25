import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {
  return (
    <div>
      <h3>{review.title}</h3>
      <p>{review.excerpt}</p>
      <Link to={`/review/${review.slug}`}>Read more</Link>
    </div>
  );
}
