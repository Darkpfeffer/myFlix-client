//import react bootstrap
import {Col, Button} from "react-bootstrap";

export const FavoriteButton= ({ storedUser, storedToken, movieData}) => {
   
    const handleClick = (event) => {
        event.preventDefault()
        if (storedUser.FavoriteMovies.includes(movieData._id)) {
            fetch(`https://myflix-5sws.onrender.com/users/${storedUser._id}/movies/${movieData._id}`, {
                method: "PUT",
                headers: {Authorization: `Bearer ${storedToken}`}
            }).then((res) => res.json()
            ).then(() => {
                alert("Movie removed from your favorite list");
                window.location.reload();
            }).catch((err) => {
                alert("Something went wrong"+ err);
            })
        } else {
            fetch(`https://myflix-5sws.onrender.com/users/${storedUser._id}/movies/${movieData._id}`, {
                method: "POST",
                headers: {Authorization: `Bearer ${storedToken}`}
            }).then((res) => res.json()
            ).then(() => {
                alert("Movie added to your favorite list");
                window.location.reload();
            }).catch((err) => {
                alert("Something went wrong"+ err);
            })
        }
    }
    return (
        <Col>
            <Button onClick={handleClick}>Click here</Button>
        </Col>
    )
}