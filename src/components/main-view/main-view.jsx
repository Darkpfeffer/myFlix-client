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
  const [favoriteMovie, setFavoriteMovie] = useState([])
  const [user, setUser]= useState(null);
  const [token, setToken]= useState(null);

  if(!user && storedUser) {
    setFavoriteMovie(storedUser.FavoriteMovies)
  }

  if (!user && storedUser) {
    setUser(storedUser);
    setToken(storedToken);
  }

  //variables for favorite list and similar movies
  if (user) {
    var favoriteMovieList= movie.filter((m) => favoriteMovie.includes(m._id));
  }

  useEffect(() => {
    if(!(user && token)) {
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
                  { user && movie.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : user ? (
                    movie.map((Movie) => (
                      <Col xs={12} md={6} lg={4} xl={3} xxl={2} key={Movie._id}>
                        <MovieCard 
                          movieData={Movie} 
                          user={user}
                          token={token}
                          favoriteMovies={favoriteMovie}
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
                  {user && movie.length === 0 ? (
                    <Col sm={{offset: 2}} md={{offset: 4}} className="fw-bold fs-5 align-self-center mb-2 mt-4">
                      The list is empty!
                    </Col>
                  ) : user ? (
                    <Col xs={12}>
                      <MovieView
                        movieData={movie} 
                        user={user}
                        token={token}
                        favoriteMovies={favoriteMovie}
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
                          setFavoriteMovie(user.FavoriteMovies)
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
                        <ProfileView
                          user={user} 
                          favoriteMovieList={favoriteMovieList} 
                          token={token}
                          favoriteMovies={favoriteMovie}
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
                        user={user} 
                        token={token}
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
                  { user ? (
                    <Col>
                      <ProfileUsernameSettings 
                        user={user} 
                        token={token}
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
                  { user ? (
                    <Col>
                      <ProfileEmailSettings 
                        user={user} 
                        token={token}
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
                  { user ? (
                    <Col>
                      <ProfileBirthdaySettings 
                        user={user} 
                        token={token}
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
                  { user ? (
                    <Col>
                      <ProfileDeleteView 
                        user={user} 
                        token={token}
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