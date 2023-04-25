import { useState } from "react";

const API_KEY = "9d3a3bfe";
const MOVIE_ENDPOINT = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);

  const getMovies = () => {
    if (search) {
      fetch(`${MOVIE_ENDPOINT}&s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          const { Search: results } = data;
          setResponseMovies(results);
        });
    }

  };
  
  return { getMovies, responseMovies };
}
