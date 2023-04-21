//importing
import PropTypes from "prop-types";

//importing Bootstrap comtonents
import Card from "react-bootstrap/Card"

//export and logic
export const MovieCard= ({ movieData, onMovieClick }) => {
  return (
    <Card
      onClick= {() => {
        onMovieClick(movieData);
      }}
      className="text-bg-dark border-secondary rounded"
    >
        <Card.Img className="px-3 pt-3" src={movieData.ImageURL}/>
        <Card.Body>
          <Card.Title className="fw-bold">{movieData.Title} ({movieData.Release_date})</Card.Title>
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