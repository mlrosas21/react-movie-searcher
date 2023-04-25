const MovieList = ({ movies }) => {

  console.log(movies);

  return (
    <section className="movieList">
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie.imdbID}>
            <h3>{movie.title}</h3>
            <h4>{movie.year}</h4>
            <img src={movie.img} alt="Movie's poster" />
          </div>
        );
      })}
    </section>
  );
};

export default MovieList;
