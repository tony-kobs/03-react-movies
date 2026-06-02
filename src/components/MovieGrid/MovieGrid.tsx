import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

export type MovieGridProps = {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
};

export default function MovieGrid({ movies, onMovieSelect }: MovieGridProps) {
  const handleSelectMovie = (movie: Movie) => {
    onMovieSelect(movie);
  };

  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => handleSelectMovie(movie)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
