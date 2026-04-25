export default function FilmCarousel() {
  const images = [
    '/review-assets/movie-1/portrait.webp',
    '/review-assets/movie-2/everything.jpg',
    '/review-assets/movie-3/machina.jpg',
  ];

  // Create duplicates for seamless infinite scroll
  const extendedImages = [...images, ...images, ...images];

  return (
    <div className="film-carousel">
      <div className="film-carousel__container">
        <div className="film-carousel__track">
          {extendedImages.map((image, index) => (
            <div key={index} className="film-carousel__frame">
              <img src={image} alt="Movie poster" className="film-carousel__image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
