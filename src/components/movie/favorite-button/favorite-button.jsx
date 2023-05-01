//import react bootstrap
import {Button, Col} from "react-bootstrap";

//import self files
import heartIcon from "../../../img/heart-icon.svg"
import fullHeartIcon from "../../../img/heart-icon-full.svg"

//import self css
import "./favorite-button.scss"

export const FavoriteButton= ({ user, token, favoriteMovies, movieData}) => {
   
    const handleClick = (event) => {
        event.preventDefault()

        if (user.FavoriteMovies.includes(movieData._id)) {
            fetch(`https://myflix-5sws.onrender.com/users/${user._id}/movies/${movieData._id}`, {
                method: "PUT",
                headers: {Authorization: `Bearer ${token}`}
            }).then((res) => res.json()
            ).then(() => {
                alert("Movie removed from your favorite list");
                window.location.reload()
            }).catch((err) => {
                alert("Something went wrong"+ err);
            })
        } else {
            fetch(`https://myflix-5sws.onrender.com/users/${user._id}/movies/${movieData._id}`, {
                method: "POST",
                headers: {Authorization: `Bearer ${token}`}
            }).then((res) => res.json()
            ).then(() => {
                alert("Movie added to your favorite list");
                window.location.reload()
            }).catch((err) => {
                alert("Something went wrong"+ err);
            })
        }
    }
    return (
        <Col>
            {favoriteMovies.includes(movieData._id) ? (
                <Button onClick={handleClick} variant="secondary" className="heart-button"><img src={fullHeartIcon} alt="Heart icon" className="heart-logo"/></Button>
            ): (
                <Button onClick={handleClick} variant="secondary"><img src={heartIcon} alt="Heart icon" className="heart-logo"/></Button>
            )}
        </Col>
    )
}