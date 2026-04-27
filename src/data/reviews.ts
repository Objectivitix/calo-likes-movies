export const reviewMetadata = [
  {
    slug: "movie-1",
    title: "Movie One",
    excerpt: "A quiet meditation on memory...",
    rating: 4.5,
    year: 2020,
    runtime: 115,
    publishDate: "2024-03-15",
  },
  {
    slug: "movie-2",
    title: "Movie Two",
    excerpt: "A louder, messier experience...",
    rating: 3.5,
    year: 2022,
    runtime: 138,
    publishDate: "2024-04-02",
  },
  {
    slug: "movie-3",
    title: "Movie Three",
    excerpt: "A restrained, elegant story...",
    rating: 5,
    year: 2023,
    runtime: 92,
    publishDate: "2024-04-10",
  }
];

export interface ReviewMeta {
  slug: string;
  title: string;
  excerpt: string;
  rating: number;
  year: number;
  runtime: number;
  publishDate: string; // or Date if you normalize earlier
}
