import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import Bootstrap components
import {Row, Col, Button} from "react-bootstrap"

// Import components from the project
import { NavigationBar } from '../navigation-bar/navigation-bar';
import {MovieCard} from "../movie-card/movie-card";
import {MovieView} from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

// Import Profile components
import { ProfileView } from "../profile/profile-view/profile-view";
import { ProfileSettingsView } from "../profile/profile-settings-view/profile-settings-view";
import { ProfilePasswordSettings } from "../profile/profile-password-settings/profile-password-settings";
import { ProfileUsernameSettings } from "../profile/profile-username-settings/profile-username-settings";

export const MainView= () => {
  const storedUser= JSON.parse(localStorage.getItem("user"));
  const storedToken= localStorage.getItem("token");
  const [movie, setMovie] = useState([]);
  const [user, setUser]= useState(null);
  const [token, setToken]= useState(null);

  if (user) {
    var favoriteMovieList= movie.filter((m) => user.FavoriteMovies.includes(m._id));
  }

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
        <Col>
          <NavigationBar
            user={user}
            token={token}
            onLoggedOut={() =>{
              setUser(null);
              setToken(null);
              localStorage.clear();
            }}
          />
        </Col>
      </Row>
      <Row>
        <Routes>
            <Route
              path="/"
              element={
                <>
                  { user && movie.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : user ? (
                    movie.map((Movie) => (
                      <Col xs={12} key={Movie._id}>
                        <MovieCard movieData={Movie}/>
                      </Col>
                    ))
                  ) : (
                    <Navigate to="/login" replace/>
                  )}
                </>
              }
            />
            <Route 
              path="/movies/:movieId"
              element={
                <>
                  {user && movie.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : user ? (
                    <Col xs={12}>
                      <MovieView movieData={movie} />
                    </Col>
                  ) : (
                    <Navigate to="/login" replace/>
                  )}
                </>
              }
            />
            <Route 
              path="/login"
              element={
                <>
                  { user ? (
                    <Navigate to="/" replace/>
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
                    <Navigate to="/" replace/>
                  ) : (
                    <Col>
                      <SignupView />
                    </Col>
                  )}
                </>
              }
            />
            <Route 
              path="/users"
              element={
                <>
                  { user ? (
                      <Col>
                        <ProfileView storedUser={storedUser} favoriteMovies={favoriteMovieList}/>
                      </Col>
                  ) : (
                    <Navigate to="/login" replace/>
                  )
                  }
                </>
              }
            />
            <Route 
              path="/users/settings"
              element={
                <>
                  { user ? (
                    <Col>
                      <ProfileSettingsView />
                    </Col>
                  ) : (
                    <Navigate to="/login" replace />
                  )}
                </>
              }
            />
            <Route 
              path="/users/settings/password"
              element={
                <>
                  { user ? (
                    <Col>
                      <ProfilePasswordSettings 
                        storedUser={storedUser} 
                        storedToken={storedToken}
                      />
                    </Col>
                  ) : (
                    <Navigate to="/login" replace/>
                  )}
                </>
              }
            />
            <Route 
              path="/users/settings/username"
              element={
                <>
                  { user ? (
                    <Col>
                      <ProfileUsernameSettings 
                        storedUser={storedUser} 
                        storedToken={storedToken}
                      />
                    </Col>
                  ) : (
                    <Navigate to="/login" replace/>
                  )}
                </>
              }
            />
        </Routes>
      </Row>
    </BrowserRouter>
  )
}