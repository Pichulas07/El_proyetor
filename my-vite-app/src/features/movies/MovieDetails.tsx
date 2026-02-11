import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Movie } from "../../models/Movie.Model";
import { getMovieById} from "../../services/Movies.Service";

export function MovieDetails() {
   const {id} = useParams<{ id: string; }>();
   const [movie, setMovie] = useState<Movie | null>(null);
   const [loading, setLoading] = useState(true);    

   useEffect(() => {
        if (!id) {
            return;
        }

        getMovieById(id)
            .then(setMovie)
            .finally(() => setLoading(false));
   }, [id]);
   
   
       if (loading) {
           return(
               <div>
                   Cargando...
               </div>
           )
        }

        if (!movie) {
            return(
                <div>
                    pagina no entrontada
                </div>
            )
        }

        return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
            {/* Botón para volver */}
            <button 
                onClick={() => window.history.back()}
                className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium transition-colors"
            >
                ← Volver al catálogo
            </button>

            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
                
                {/* Contenedor del Póster */}
                <div className="md:w-1/3 bg-gray-200">
                    <img 
                        src={movie.posterUrl} 
                        alt={movie.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Contenedor de Información */}
                <div className="md:w-2/3 p-8 md:p-12">
                    <div className="flex justify-between items-start mb-4">
                        <h1 className="text-4xl font-bold text-gray-900">{movie.title}</h1>
                        <span className="bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-lg">
                            ⭐ {movie.rating}
                        </span>
                    </div>

                    <p className="text-gray-500 text-lg mb-6 italic">
                        {movie.year} • {movie.genre} • {movie.duration} min
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Sinopsis</h2>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        {movie.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
                        <div>
                            <h3 className="text-sm font-uppercase tracking-wider text-gray-400 uppercase">Director</h3>
                            <p className="text-gray-900 font-medium">{movie.director}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-uppercase tracking-wider text-gray-400 uppercase">País</h3>
                            <p className="text-gray-900 font-medium">{movie.country}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-uppercase tracking-wider text-gray-400 uppercase">Idioma</h3>
                            <p className="text-gray-900 font-medium">{movie.language}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}