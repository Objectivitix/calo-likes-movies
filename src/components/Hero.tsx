import FilmCarousel from "./FilmCarousel";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Calo Likes Movies</h1>
        <p className="hero__subtitle">Scroll to explore</p>
      </div>
      <FilmCarousel />
    </section>
  );
}
