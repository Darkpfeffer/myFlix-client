//importing
import PorpTypes from "prop-types";

//export and logic
export const MovieCard= ({ movieData, onMovieClick }) => {
  return (
    <div
      onClick= {() => {
        onMovieClick(movieData);
      }}
    >
      {movieData.Title}
    </div>
  )
};

// define all the props constraints for the MovieCard
MovieCard.propTypes= {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Release_date: PropTypes.number.isRequired,
    Genre: PropTypes.object.isRequired,
    ImageURL: PropTypes.string.isRequired
  })
}