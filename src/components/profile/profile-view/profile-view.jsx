//import
import { Link } from "react-router-dom";

//Import react-bootstrap
import {Row, Col} from "react-bootstrap";

//import components
import { MovieCard } from "../../movie/movie-card/movie-card";

export const ProfileView = ({storedUser, favoriteMovies, storedToken}) => {
    return (
        <>
            <Row>
                <Col>
                    User:
                </Col>
                <Col xs={10}>
                    {storedUser.Username}
                </Col>
                <Col>
                    <Link to={`/users/settings`}>
                        Settings
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    Email:
                </Col>
                <Col xs={11}>
                    {storedUser.Email}
                </Col>
            </Row>
            <Row>
                <Col>
                    Birthday:
                </Col>
                <Col xs={11}>
                    {storedUser.Birthday}
                </Col>
            </Row>
            <Row>
                <Col>
                    Favorite Movies:
                </Col>
            </Row>
            <Row>
                {favoriteMovies.map((movie) => (
                    <Col key={movie._id}>
                        <MovieCard movieData={movie} storedUser={storedUser} storedToken={storedToken}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}