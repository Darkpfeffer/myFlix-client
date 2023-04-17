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
    >
        <Card.Img src={movieData.ImageURL}/>
        <Card.Body>
          <Card.Title className="fw-bold">{movieData.Title} ({movieData.Release_date})</Card.Title>
          <Card.Text className="fw-semibold">Genre: {movieData.Genre.Name}</Card.Text>
          <Card.Text className="fw-semibold">Director: {movieData.Director.Name}</Card.Text>
          <Card.Text>{movieData.Description}</Card.Text>
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