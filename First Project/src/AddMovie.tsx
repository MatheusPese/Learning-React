import React, { Component } from 'react'

const API_URL ='https://api.themoviedb.org/3/movie/550?api_key=030edf28c08ee51a7e306dc49727bc5e'

export class AddMovie extends Component {
  render() {
    return (
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
    )
  }
}

export default AddMovie
