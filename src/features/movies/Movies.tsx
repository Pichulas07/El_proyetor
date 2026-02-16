import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import type { Movie } from "../../models/Movie.Model";
import { getMovies } from "../../services/Movies.Service";

export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies()
        .then(setMovies)
        .finally(() => setLoading(false));
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <p className="text-xl font-semibold text-blue-600">Cargando...</p>
            </div>
        )
    }

    return <MovieList movies={movies}/>;
}
