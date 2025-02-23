import React from 'react';
import { NavLink } from "react-router-dom";


const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} className="saved-movie">{movie.title} </NavLink>
    ))}
    <NavLink to="/" className="home-button">Home</NavLink>
  </div>
);

export default SavedList;
