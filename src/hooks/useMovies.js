import { useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)


  const getMovies = async () => {
    try{
      setLoading(true)
      setError(null)
      const movies = await searchMovies({search})
      setMovies(movies)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  };
  
  return { getMovies, movies, error, loading };
}
