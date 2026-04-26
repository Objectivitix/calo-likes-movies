import './FilmCarousel.css';

export default function FilmCarousel() {
  const imageModules = import.meta.glob('/public/carousel/**/*.{jpg,jpeg,png,webp}', { 
    eager: true,
    as: 'url'
  });
  
  const images = Object.values(imageModules) as string[];

  // Create duplicates for seamless infinite scroll
  const extendedImages = [...images, ...images, ...images];

  const Perforations = () => (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="film-carousel__perforation" />
      ))}
    </>
  );

  return (
    <div className="film-carousel">
      <div className="film-carousel__container">
        <div className="film-carousel__track">
          {extendedImages.map((image, index) => (
            <div key={index} className="film-carousel__frame">
              <div className="film-carousel__perforations">
                <Perforations />
              </div>
              <img src={image} alt="Movie poster" className="film-carousel__image" />
              <div className="film-carousel__perforations">
                <Perforations />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
