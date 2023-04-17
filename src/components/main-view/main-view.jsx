import {useState, useEffect } from "react";

// Import Bootstrap components
import {Row, Col, Button} from "react-bootstrap"

// Import components from the project
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
        <LoginView 
          onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }}/>

        <SignupView />
    </div>
    )
  }

  if (selectedMovie) {
    return <MovieView movieData={selectedMovie} onBackClick={() => {setSelectedMovie(null)}}/>;
  }

  if (movie.length=== 0) {
    return (
    <>
      <Row>
        <Col xs={{offset: 11}} className="mb-3 mt-2">
          <Button onClick={() => { setUser(null); setToken(null); }}>Logout</Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          The list is empty!
        </Col>
      </Row>
    </>
    )
  }
  return (
    <div>
      <Row>
        <Col xs={{offset: 11}} className="mb-3 mt-2">
          <Button onClick={() => { setUser(null); setToken(null); }}>Logout</Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
          {movie.map((movie)=> (
            <Col md={4} className="mb-5">
              <MovieCard 
                key={movie._id} 
                movieData={movie}
                onMovieClick ={ (newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
}