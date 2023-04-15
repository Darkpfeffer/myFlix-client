import {useState, useEffect } from "react";

import {MovieCard} from "../movie-card/movie-card";
import {MovieView} from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView= () => {
  const storedUser= JSON.parse(localStorage.getItem("user"));
  const storedToken= localStorage.getItem("token");
  const [movie, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie]= useState(null);
  const [user, setUser]= useState(null);
  const [token, setToken]= useState(null);

  useEffect(() => {
    if(!token && !(storedUser && storedToken)) {
      return;
    }

    fetch("https://myflix-5sws.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}`}
    })
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
            ImageURL: movie.ImageURL,
            Actors: movie.Actors
          }
        }) 
        
        setMovie(moviesFromApi);
      });
  }, [token]);

  if (!user) {
    return ( 
    <div>
      <div>
        Login:
        <br/>
        <br/>
        <LoginView 
          onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }}/>
      </div>
      <br/>
      <div>
        Register:
        <br/>
        <br/>
        <SignupView />
      </div>
    </div>
    )
  }

  if (selectedMovie) {
    return <MovieView movieData={selectedMovie} onBackClick={() => {setSelectedMovie(null)}}/>;
  }

  if (movie.length=== 0) {
    return <div>The list is empty!</div>
  }
  return (
    <div>
      <div>
        <button onClick={() => { setUser(null); setToken(null); }}>Logout</button>
      </div>
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
    </div>
  );
}