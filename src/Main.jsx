import React, { useState, useEffect } from 'react'
import searchIcon from './search.svg';
import MovieCard from './MovieCard';




const Api_Url = 'http://www.omdbapi.com/?apikey=da28ca55';

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  

  useEffect(() => {
    randomMovies();
  },[]);

  const randomMovies = async () => {
    const response = await fetch('http://www.omdbapi.com/?apikey=da28ca55&s=love&type=movie');
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies)
  }


 const fetchMovies = async (title) => {
  console.log('Fetching movies with title:', title);
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies)
  }
 

  return (
    <div className="app">
      <h1>Kinyenje Flix</h1>

      <div className="search">
        <input 
            type="text" 
            placeholder='Search Movie'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
             />
        <img src={searchIcon}
            onClick={ () => fetchMovies(searchValue)}
            alt="Search"
         />
                   
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (         
              <MovieCard
                Year={movie.Year}
                Title = {movie.Title}
                Poster = {movie.Poster}
                Type = {movie.Type}
                />      
          ))}
         </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }

    

    </div>
  )
}

export default Main