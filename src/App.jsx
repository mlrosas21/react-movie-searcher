import "./App.css";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import { useEffect, useState } from "react";

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { getMovies, movies, loading: moviesLoading } = useMovies({ search, sort });
  // const inputRef = useRef(); // <- no tan recomendado, porque se ensucia al tratar varios inputs

  const handleChange = (event) => {
    const newSearch = event.target.value 
    setSearch(newSearch);
    getMovies(newSearch)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(search);

    // useRef() --- No controlada
    //const value = inputRef.current.value;
    // console.log(value)

    // FormData --- No controlada
    // const fields = new FormData(e.target)
    // console.log(fields.get('query'));

    // useState --- Controlada

    //getMovieByTitle(name);
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <h1>Buscador de peliculas</h1>
          <span>
            <input
              name="query"
              value={search}
              onChange={handleChange}
              placeholder="Avatar, Harry Potter, etc..."
              // ref={inputRef}
            />
            <button type="submit" style={{ marginLeft: "1rem" }}>
              Buscar
            </button>
          </span>
          <span>
            <label>Orden alfabético: </label>
            <input
              type="checkbox"
              name="sort"
              onChange={() => setSort((prevState) => !prevState)}
              checked={sort}
            />
          </span>
        </form>
      </header>

      <main>
        {error && <h4>{error}</h4>}

        {moviesLoading ? (
          <p>Cargando películas...</p>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </>
  );
}

export default App;
