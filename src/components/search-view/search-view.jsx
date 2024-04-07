//import react-bootstrap
import { Form, Button, Row, Col } from "react-bootstrap";

//import self components
import { MovieCard } from "../movie/movie-card/movie-card";

export const SearchView = ({ user, token, favoriteMovies, movie}) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        let formSearch = document.querySelector('.formInput')
        let movieRow = document.querySelector('.movie-row')

        for (let i=0; i<movieRow.childElementCount; i++) {
            let child = movieRow.children[i];
            let movieTitle = child.querySelector('.cardTitle')

            child.classList.remove('hide');

            if (!movieTitle.innerText.toLowerCase().includes(formSearch.value.toLowerCase())) { 
                child.classList.add('hide');
            }
        }
    }
    return (
        <>
            <Row>
                <Col>
                    <Form onChange={handleSubmit} className="mt-3">
                            <Form.Group as={Col} style={{'max-width': '200px'}} sm={{span: 4, offset: 5}} md={{span: 3, offset: 7}} lg={{span: 2, offset: 8}} xxl={{offset: 9}} controlId="formSearch">
                                <Form.Control 
                                    className="text-bg-dark formInput"
                                    type="text"
                                    placeholder="search movies here"
                                />
                            </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="movie-row">
                {   (user && (
                        movie.map((Movie) => (
                            <Col xs={12} md={6} lg={4} xl={3} xxl={2} key={Movie._id} className="single-movie">
                            <MovieCard 
                                movieData={Movie} 
                                user={user}
                                token={token}
                                favoriteMovies={favoriteMovies}
                            />
                            </Col>
                        ))
                    ) 
                )}
            </Row>
        </>
    )
}
