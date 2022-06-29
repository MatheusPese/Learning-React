import React, { BaseSyntheticEvent, Component, Key, useEffect, useState } from 'react'

type TMDBquery ={
  adult:boolean;
  backdrop_path:string;
  genre_ids: Array<Number>;
  id: Number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: Number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: Number;
  vote_count: Number;
}

type movieSearchResult={
  id:Key;
  title:string;
  year:Date;
}

const API_KEY = import.meta.env.VITE_THEMOVIEDB_API_KEY
const API_URL =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`

const AddMovie = () => {
    
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchResult, setSearchResult] = useState<Array<movieSearchResult>>([]);
    
    useEffect(()=>{
      MovieSearch(searchInput)
    },[searchInput])

    const MovieSearch = async (query:string) =>{
      if (query && searchInput.length >= 4){
        const response = await fetch(`${API_URL}&query=${query}`, {method:'GET', cache:'force-cache'})
        const data = await response.json();
        const filter  = await data.results.filter( (x:TMDBquery) => x.original_language =="en" && x.title.toLowerCase().startsWith(searchInput.toLowerCase())).slice(0,5)
        const results:Array<movieSearchResult> = await filter.map((x:TMDBquery) => new Object({id:x.id, title:x.title, year:new Date(x.release_date).getFullYear() }))
        const uniqueResults:Array<movieSearchResult> = [...(new Set(results))]
        setSearchResult(uniqueResults)
      }
      else{
        setSearchResult([])
      }
    }
    const changeAutocomplete = (e:BaseSyntheticEvent) => {
      setSearchInput(e.target.value);
      MovieSearch(searchInput); 
    }

    return (
      <label>
        <input list='movies' onChange={(e) => changeAutocomplete(e)} onClick={(e) => changeAutocomplete(e)}/>
        <datalist id='movies'>
          {searchResult.map((x:movieSearchResult) => <option key={x.id} value={`${x.title} (${x.year})`}/>)}
        </datalist>
        <select name="Status">
          <option value="Not Watched">Not Watched</option>
          <option value="Watched">Watched</option>
          <option value="Droped">Droped</option>
          <option value="Plan to watch">Plan to watch</option>
        </select>
        <button onClick={() => {}}>add movie</button>
      </label>
    )
}

export default AddMovie
