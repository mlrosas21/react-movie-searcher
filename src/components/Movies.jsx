const MovieList = ({ movies }) => {

  return (
    <section className="movieList">
      {movies?.map((movie) => {
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

const NoResults = () => {
  return <p>No se encontraron películas para estos términos</p>;
};

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <MovieList movies={movies} /> : <NoResults />;
}
