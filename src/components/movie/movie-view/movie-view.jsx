//Import
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// Import Bootstrap components
import {Row, Col, Button} from "react-bootstrap"

//Import self made components
import { FavoriteButton } from "../favorite-button/favorite-button";
import { MovieCard } from "../movie-card/movie-card";

export const MovieView= ({ storedUser, storedToken, movieData }) => {
const { movieId } = useParams();

const Movie = movieData.find((movie) => movie._id === movieId);
const similarMovies= movieData.filter((m) => Movie.Genre.Name === m.Genre.Name);


  return(
    <>
      <Row>
        <Col>
          <FavoriteButton 
            storedUser={storedUser} 
            storedToken={storedToken} 
            movieData={Movie}
          />
        </Col>
        <Col sm={{offset: 10}}>
          <Link to={`/`}>
            <Button>Back</Button>
          </Link>
        </Col>
      </Row>
      <Row className="fw-bold fs-1 mb-3">
        <Col>{Movie.Title}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Genre: </Col>
        <Col xs={10}>{Movie.Genre.Name}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Description: </Col>
        <Col xs={10}>{Movie.Description}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Director: </Col>
        <Col xs={10} className="fs-6">{Movie.Director.Name}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Release date: </Col>
        <Col xs={10}>{Movie.Release_date}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Actors: </Col>
        <Col xs={10}>{Movie.Actors}</Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-4"><img src={Movie.ImageURL} className="movie_image"/></Col>
      </Row>
      <Row>
        <Col className="fs-2">
          Similar Movies:
        </Col>
      </Row>
      <Row>
      { similarMovies.map((similarMovie) => (
        similarMovie._id === Movie._id ? (
          <Col className="d-none"></Col>
        ) : (
        <Col key={similarMovie._id}>
          <MovieCard 
            movieData={similarMovie}
            storedUser={storedUser}
            storedToken={storedToken}
          />
        </Col>
        )
         ))}
      </Row>
    </>
  )
}