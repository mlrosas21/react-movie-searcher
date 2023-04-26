import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Evitar búsqueda duplicada
  const prevSearch = useRef(search);

  const getMovies = useCallback(async (search) => {
    // Evitar búsqueda duplicada
    if (search === prevSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      prevSearch.current = search;
      const movies = await searchMovies({ search });
      setMovies(movies);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    console.log(movies);
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { getMovies, movies: sortedMovies, error, loading };
}
