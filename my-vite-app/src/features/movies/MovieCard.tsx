import { Link } from "react-router-dom";
import type { Movie } from "../../models/Movie.Model";

export default function MovieCard(movie: Movie) {
   return (
    <Link to={`/movies/${movie.id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
        
        {/* Imagen del póster */}
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{movie.title}</h3>
          <p className="text-sm text-gray-600">{movie.year}</p>
          {movie.description && <p className="mt-2 text-gray-700">{movie.description}</p>}
        </div>
      </div>
    </Link>
  );
}