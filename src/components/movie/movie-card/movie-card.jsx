//importing
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//importing Bootstrap comtonents
import Card from "react-bootstrap/Card";

//importing project components
import { FavoriteButton } from "../favorite-button/favorite-button";

//import self scss
import "./movie-card.scss";

//export and logic
export const MovieCard= ({ movieData, storedUser, storedToken }) => {
  return (
    
      <Card
        className="text-bg-dark border-secondary rounded"
      >
          <Card.Img className="px-3 pt-3" src={movieData.ImageURL}/>
          <Card.Body>
            <Card.Title className="fw-bold">{movieData.Title} ({movieData.Release_date}) <FavoriteButton storedUser={storedUser} storedToken={storedToken} movieData={movieData}/></Card.Title>
            <Card.Text 
              className="fw-semibold border-top border-bottom border-secondary"
            >
              Genre: <br className="mobile"/>{movieData.Genre.Name}
            </Card.Text>
            <Card.Text 
              className="fw-semibold border-top border-bottom border-secondary"
            >
              Director: <br className="mobile"/>{movieData.Director.Name}
            </Card.Text>
            <Card.Text 
              className="border-top border-bottom border-secondary"
            >
              {movieData.Description}
            </Card.Text>
            <Link to={`/movies/${movieData._id}`} className="movie-card">
              <Card.Text>Open the movie</Card.Text>
            </Link>
          </Card.Body>
      </Card>
    
  )
};

// define all the props constraints for the MovieCard
MovieCard.propTypes= {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Release_date: PropTypes.string.isRequired,
    Genre: PropTypes.object.isRequired,
    Director: PropTypes.object.isRequired,
    Actors: PropTypes.array,
    ImageURL: PropTypes.string.isRequired
  })
}