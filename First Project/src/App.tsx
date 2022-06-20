import React from 'react';
import MovieList from './MovieList';

const App = () => {
  return (
  <>
  <h1>Marvel's watchlist</h1>
  <h2>Every movie and series watched from marvel</h2>

  <MovieList/>
  <label>
    <input placeholder='Title'></input>
    <select name="Status">
      <option value="Not Watched">Not Watched</option>
      <option value="Watched">Watched</option>
      <option value="Droped">Droped</option>
      <option value="Plan to watch">Plan to watch</option>
    </select>
    <button>add movie</button>
  </label>
 </>
 )
}

export default App
