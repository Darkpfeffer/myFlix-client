export const MovieView= ({ movieData }) => {
  return(
    <div>
      <div>
        <span>Title: </span>
        <span>{movieData.Title}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movieData.Genre.Name}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movieData.Description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movieData.Director.Name}</span>
      </div>
      <div>
        <span>Release date: </span>
        <span>{movieData.Release_date}</span>
      </div>
      <div>
        <img src={movieData.ImageURL}/>
      </div>
    </div>
  )
}