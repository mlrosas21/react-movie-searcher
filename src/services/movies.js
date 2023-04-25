const API_KEY = "9d3a3bfe";
const MOVIE_ENDPOINT = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async ({ search }) => {
  try {
    const response = await fetch(`${MOVIE_ENDPOINT}&s=${search}`)
    const json = await response.json()
    const movies = json.Search;

    return movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    }))


  } catch(err){
    throw new Error('Error searching movies')
  }
}