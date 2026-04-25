import { useParams } from "react-router-dom";
import { reviews } from "../data/reviews";

export default function Review() {
  const { slug } = useParams();
  const review = reviews.find(r => r.slug === slug);

  if (!review) return <p>Not found</p>;

  return (
    <div>
      <h1>{review.title}</h1>
      <p>{review.content}</p>
    </div>
  );
}
