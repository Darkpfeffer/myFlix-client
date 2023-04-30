import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import Bootstrap components
import {Row, Col, Button} from "react-bootstrap"

// Import components from the project
import { NavigationBar } from '../navigation-bar/navigation-bar';
import {MovieCard} from "../movie/movie-card/movie-card";
import {MovieView} from "../movie/movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

// Import Profile components
import { ProfileView } from "../profile/profile-view/profile-view";
import { ProfileSettingsView } from "../profile/profile-settings-view/profile-settings-view";
import { ProfilePasswordSettings } from "../profile/profile-password-settings/profile-password-settings";
import { ProfileUsernameSettings } from "../profile/profile-username-settings/profile-username-settings";
import { ProfileEmailSettings } from "../profile/profile-email-settings/profile-email-settings";
import { ProfileBirthdaySettings } from "../profile/profile-birthday-settings/profile-birthday-settings";
import { ProfileDeleteView } from "../profile/profile-delete-view/profile-delete-view";

export const MainView= () => {
  const storedUser= JSON.parse(localStorage.getItem("user"));
  const storedToken= localStorage.getItem("token");
  const [movie, setMovie] = useState([]);
  const [user, setUser]= useState(null);
  const [token, setToken]= useState(null);

  //variables for favorite list and similar movies
  if (storedUser) {
    var favoriteMovieList= movie.filter((m) => storedUser.FavoriteMovies.includes(m._id));
  }

  useEffect(() => {
    if(!(storedUser && storedToken)) {
      return;
    }

    fetch("https://myflix-5sws.onrender.com/movies", {
      headers: { Authorization: `Bearer ${storedToken}`}
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
  }, [storedToken]);

  return (
    <BrowserRouter>
      <Row>
        <Col>
          <NavigationBar
            storedUser={storedUser}
            onLoggedOut={() =>{
              setUser(null)
              setToken(null);
              localStorage.clear();
              window.location.reload();
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mt-5"></Col>
      </Row>
      <Row>
        <Routes>
            <Route
              path="/"
              element={
                <>
                  { storedUser && movie.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : storedUser ? (
                    movie.map((Movie) => (
                      <Col xs={12} md={6} lg={4} xl={3} xxl={2} key={Movie._id}>
                        <MovieCard 
                          movieData={Movie} 
                          storedUser={storedUser}
                          storedToken={storedToken}
                        />
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
                  {storedUser && movie.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : storedUser ? (
                    <Col xs={12}>
                      <MovieView
                        movieData={movie} 
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
              path="/login"
              element={
                <>
                  { storedUser ? (
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
                  { storedUser ? (
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
                  { storedUser ? (
                      <Col>
                        <ProfileView
                          storedUser={storedUser} 
                          favoriteMovies={favoriteMovieList} 
                          storedToken={storedToken}
                        />
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
                  { storedUser ? (
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
                  { storedUser ? (
                    <Col>
                      <ProfilePasswordSettings 
                        storedUser={storedUser} 
                        storedToken={storedToken}
                        onChanging={() => {
                          setUser(null),
                          setToken(null),
                          localStorage.clear();
                          window.location.reload();
                        }}
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
                  { storedUser ? (
                    <Col>
                      <ProfileUsernameSettings 
                        storedUser={storedUser} 
                        storedToken={storedToken}
                        onChanging={() => {
                          setUser(null),
                          setToken(null),
                          localStorage.clear();
                          window.location.reload();
                        }}
                      />
                    </Col>
                  ) : (
                    <Navigate to="/login" replace/>
                  )}
                </>
              }
            />
            <Route 
              path="/users/settings/email"
              element={
                <>
                  { storedUser ? (
                    <Col>
                      <ProfileEmailSettings 
                        storedUser={storedUser} 
                        storedToken={storedToken}
                        onChanging={() => {
                          setUser(null),
                          setToken(null),
                          localStorage.clear();
                          window.location.reload();
                        }}
                      />
                    </Col>
                  ) : (
                    <Navigate to="/login" replace/>
                  )}
                </>
              }
            />
            <Route 
              path="/users/settings/birthday"
              element={
                <>
                  { storedUser ? (
                    <Col>
                      <ProfileBirthdaySettings 
                        storedUser={storedUser} 
                        storedToken={storedToken}
                        onChanging={() => {
                          setUser(null),
                          setToken(null),
                          localStorage.clear();
                          window.location.reload();
                        }}
                      />
                    </Col>
                  ) : (
                    <Navigate to="/login" replace/>
                  )}
                </>
              }
            />
            <Route 
              path="/users/settings/delete"
              element={
                <>
                  { storedUser ? (
                    <Col>
                      <ProfileDeleteView 
                        storedUser={storedUser} 
                        storedToken={storedToken}
                        onDelete={() => {
                          setUser(null),
                          setToken(null),
                          localStorage.clear();
                          window.location.reload();
                        }}
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