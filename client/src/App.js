import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './index.css';

import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    const movieNames = savedList.map(movie => movie.title)

    if (!movieNames.includes(movie.title)) { 
      setSavedList([...savedList, movie]);
    }
  };
  
  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={(props) => <MovieList {...props} addToSavedList={addToSavedList} />} />
      <Route path='/movies/:id' render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
