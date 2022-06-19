import React from 'react';
import MovieList from './MovieList';
function App() {
  return (
  <>
  <h1>Marvel's watched</h1>
  <h2>Every movie and series watched from marvel</h2>
  
  <MovieList/>
  <label>
    <input></input>
    <button>add movie</button>
  </label>
 </>
 )
}

export default App
