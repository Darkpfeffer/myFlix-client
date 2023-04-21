import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

  return (
    <BrowserRouter>
      <Row>
        <Routes>
            <Route
              path="/"
              element={
                <>
                  { user ? (
                    <Col xs={12} key={movie._id}>
                      <MovieCard />
                    </Col>
                  ) : (
                    <Navigate to="/login"/>
                  )}
                </>
              }
            />
            <Route 
              path="/login"
              element={
                <>
                  { user ? (
                    <Navigate to="/" />
                  ) : (
                      <Col xs={12}>
                        <LoginView onLoggedIn={(user, token) => {
                          setUser(user);
                          setToken(token);
                          }} />
                      </Col>
                  )}
                </>
              }
            />
            <Route 
              path="/signup"
              element={
                <>
                  { user ? (
                    <Navigate to="/"/>
                  ) : (
                    <SignupView />
                  )}
                </>
              }
            />
        </Routes>
      </Row>
    </BrowserRouter>
  )
}