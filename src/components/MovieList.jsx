const MovieList = ({ movies }) => {

  console.log(movies);

  return (
    <section className="movieList">
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <h4>{movie.Year}</h4>
            <img src={movie.Poster} alt="Movie's poster" />
          </div>
        );
      })}
    </section>
  );
};

export default MovieList;
