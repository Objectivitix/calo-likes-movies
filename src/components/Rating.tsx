interface RatingProps {
  rating: number;
}

export default function Rating({ rating }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="rating">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="rating__star rating__star--full">★</span>
      ))}
      {hasHalfStar && (
        <span className="rating__star rating__star--half">½</span>
      )}
    </div>
  );
}
