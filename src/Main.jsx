import React, { useState, useEffect } from 'react'
import searchIcon from './search.svg';
import MovieCard from './MovieCard';




const Api_Url = 'http://www.omdbapi.com/?apikey=da28ca55'

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  

  useEffect(() => {
    fetchMovies('spiderman');
  }, []);


 const fetchMovies = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies)
  }
  const movieClip = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }

  return (
    <div className="App">
      <h1>Kinyenje Flix</h1>

      <div className="search">
        <input type="text" 
            placeholder='Search Movie'
            value={searchValue}
            onChange={(e) => {return setSearchValue(e.target.value)}}
             />
        <img src={searchIcon}
            onClick={ () => {fetchMovies(searchValue)}}
            alt="Search"
         />
                   
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => {         
              <MovieCard
                Year={movie.Year}
                Title = {movie.Title}
                Poster = {movie.Poster}
                Type = {movie.Type}
                />      
          })}
         </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }

      <MovieCard
       Year={movieClip.Year}
       Title = {movieClip.Title}
       Poster = {movieClip.Poster}
       Type = {movieClip.Type}
        />

    </div>
  )
}

export default Main