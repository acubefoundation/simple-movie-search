// import Practice from './components/Practice'
import { useEffect, useState } from "react";
import "./app.css";
import MovieContainer from "./components/MovieContainer";
import search from './assets/search.svg'
function App() {
  const API_URL = "http://www.omdbapi.com?apikey=4e346c45";
  // const movie = {
  //   Title: "Batman Begins",
  //   Year: "2005",
  //   imdbID: "tt0372784",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  // };


  const [searchValue, setSearchValue] = useState("spiderman");
  const [movies, setMovies] = useState([])
  
  const inputValue = (e) => {
    setSearchValue(e.target.value);
  };
  const searchMovie = async (title, page = 1, resultsPerPage = 10) => {
    const response = await fetch(`${API_URL}&s=${title}&page=${page}`);

    const data = await response.json();
    const limitedResults = data.Search.slice(0, resultsPerPage);
    setMovies(limitedResults);
  };

  useEffect(() => {
    searchMovie(searchValue);
  }, [searchValue]);
  return (
    <div className="app">
      <h1>Movie Search Project</h1>
      <div className="search">
        <input
          value={searchValue}
          placeholder="search your movie here"
          onChange={inputValue}
        />
        <img src={search} onClick={(e) =>{ e.preventDefault(); searchMovie(searchValue)}}/>
      </div>
      <div className="container">
        {movies && movies.length > 0 ? movies?.map((movie, index) => <MovieContainer movie={movie} key={index} /> ): <div className="empty"><h2>No results found</h2></div>}
   </div>
   
   
    </div>
  );
}

   export default App;


// import Practice from "./components/practice";

//    const App = () => {
//     return (
// <>
// <Practice />
// </>
//     )
//    }
//    export default App;