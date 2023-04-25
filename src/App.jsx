import "./App.css";
import MovieList from "./components/MovieList";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { search, setSearch, error } = useSearch();
  const { getMovies, responseMovies } = useMovies({search});
  // const inputRef = useRef(); // <- no tan recomendado, porque se ensucia al tratar varios inputs

  // 

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies()

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
          <h2>Buscador de peliculas</h2>
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
        </form>
      </header>

      <main>
        {error && <h4>{error}</h4>}

        {responseMovies && <MovieList movies={responseMovies} />}
      </main>
    </>
  );
}

export default App;
