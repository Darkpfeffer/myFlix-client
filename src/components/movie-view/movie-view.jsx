// Import Bootstrap components
import {Row, Col, Button} from "react-bootstrap"

export const MovieView= ({ movieData, onBackClick }) => {
  return(
    <>
      <Row>
        <Col xs={{offset: 11}}>
          <Button onClick={onBackClick}>Back</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>Title: </Col>
        <Col xs={10}>{movieData.Title}</Col>
      </Row>
      <Row>
        <Col xs= {2}>Genre: </Col>
        <Col xs={10}>{movieData.Genre.Name}</Col>
      </Row>
      <Row>
        <Col xs= {2}>Description: </Col>
        <Col xs={10}>{movieData.Description}</Col>
      </Row>
      <Row>
        <Col xs= {2}>Director: </Col>
        <Col xs={10}>{movieData.Director.Name}</Col>
      </Row>
      <Row>
        <Col xs= {2}>Release date: </Col>
        <Col xs={10}>{movieData.Release_date}</Col>
      </Row>
      <Row>
        <Col xs= {2}>Actors: </Col>
        <Col xs={10}>{movieData.Actors}</Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center"><img src={movieData.ImageURL} className="movie_image"/></Col>
      </Row>
    </>
  )
}