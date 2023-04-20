// Import Bootstrap components
import {Row, Col, Button} from "react-bootstrap"

export const MovieView= ({ movieData, onBackClick }) => {
  return(
    <>
      <Row>
        <Col sm={{offset: 11}}>
          <Button onClick={onBackClick}>Back</Button>
        </Col>
      </Row>
      <Row className="fw-bold fs-1 mb-3">
        <Col>{movieData.Title}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Genre: </Col>
        <Col xs={10}>{movieData.Genre.Name}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Description: </Col>
        <Col xs={10}>{movieData.Description}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Director: </Col>
        <Col xs={10} className="fs-6">{movieData.Director.Name}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Release date: </Col>
        <Col xs={10}>{movieData.Release_date}</Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs= {5} sm={2}>Actors: </Col>
        <Col xs={10}>{movieData.Actors}</Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-4"><img src={movieData.ImageURL} className="movie_image"/></Col>
      </Row>
    </>
  )
}