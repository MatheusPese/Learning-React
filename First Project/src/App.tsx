import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

import './App.css';
const App = () => {
  return (
  <>
  <h1>My movie watchlist</h1>
  <h2>Every movie and series I watched.</h2>

  <MovieList/>
  <AddMovie/>

 </>
 )
}

export default App
