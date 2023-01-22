import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";

// Component imports
import { Header, Card, Pagination } from "./components";

// Actions imports
import { getMoviesAction } from "./redux/actions/moviesActions";

function App() {
  // We extract data from the state movies with the useSelector hook
  const { movies, loading } = useSelector((state) => state.movies);
  // This useDispatch hook returns a reference to the redux dispatch function
  // We will use it to dispatch functions as needed
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  // Filter logic
  const [category, setCategory] = useState(null);
  const filteredMovies = movies.filter((movie) =>
    category ? movie.category === category : movie
  );

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(12);
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = filteredMovies.slice(firstMovieIndex, lastMovieIndex);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="App">
      <Header />
      <Card
        movies={movies}
        currentMovies={currentMovies}
        setCategory={setCategory}
        setCurrentPage={setCurrentPage}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalMovies={filteredMovies.length}
        moviesPerPage={moviesPerPage}
        setMoviesPerPage={setMoviesPerPage}
      />
    </div>
  );
}

export default App;
