import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../index.css';
import MovieCard from "./MovieCard";

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => {
        const saveMovie = () => {
        const addToSavedList = props.addToSavedList;
        addToSavedList(movie)
        }
        return (<MovieCard key={movie.id} movie={movie} saveMovie={saveMovie}/>)
      })}
    </div>
  );
}

// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (<MovieCard />);
  // return (
  //   <Link to={`/movies/${movie.id}`} className="movie-card">
  //     <h2>{title}</h2>
  //     <div className="movie-director">
  //       Director: <em>{director}</em>
  //     </div>
  //     <div className="movie-metascore">
  //       Metascore: <strong>{metascore}</strong>
  //     </div>
  //     <h3>Actors</h3>

  //     {stars.map(star => (
  //       <div key={star} className="movie-star">
  //         {star}
  //       </div>
  //     ))}
  //   </Link>
  // );
// }

export default MovieList;
