import type { Movie } from "../../models/Movie.Model";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <section className="w-full min-h-full py-12 px-6">
      
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-blue-800 text-center">
          🎬 Catálogo de Películas
        </h2>
        <p className="text-center text-blue-700 mt-2">
          Descubre nuestras mejores películas disponibles
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>

    </section>
  );
}
