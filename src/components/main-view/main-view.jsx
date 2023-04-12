import {useState, useEffect } from "react";

import {MovieCard} from "../movie-card/movie-card";
import {MovieView} from "../movie-view/movie-view";

export const MainView= () => {
  const [movie, setMovie] = useState([]);

  const [selectedMovie, setSelectedMovie]= useState(null);

  useEffect(() => {
    fetch("https://myflix-5sws.onrender.com/movies")
      .then((res) => res.json())
      .then((data) => {
        const moviesFromApi= data.map((movie) => {
          return {
            _id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            Release_date: movie.Release_date,
            Genre: movie.Genre,
            Director: movie.Director,
            ImageURL: movie.ImageURL
          }
        }) 
        
        setMovie(moviesFromApi);
        console.log(moviesFromApi)
      });
  }, []);

  if (selectedMovie) {
    return <MovieView movieData={selectedMovie} onBackClick={() => {setSelectedMovie(null)}}/>;
  }

  if (movie.length=== 0) {
    return <div>The list is empty!</div>
  }
  return (
    <div>
      {movie.map((movie)=> (
        <MovieCard 
          key={movie._id} 
          movieData={movie}
          onMovieClick ={ (newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
}