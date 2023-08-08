import React from 'react'

const MovieCard = (props) => {
  return (
    <div className="movie">
        <div>
          <p>{props.Year}</p>
        </div>

        <div>
          <img className='poster' src={props.Poster} />
        </div>
        <div>
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
        </div>
           
            
            
      </div>
  )
}

export default MovieCard