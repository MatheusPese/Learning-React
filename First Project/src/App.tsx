import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

import './App.css';
const App = () => {
  return (
  <>
  <h1>My Marvel's watchlist</h1>
  <h2>Every movie and series I watched from the marvel cinematic universe.</h2>

  <MovieList/>
  <AddMovie/>

 </>
 )
}

export default App
