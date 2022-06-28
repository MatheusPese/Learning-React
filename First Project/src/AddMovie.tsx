import React, { Component, useEffect, useState } from 'react'


const API_KEY = import.meta.env.VITE_THEMOVIEDB_API_KEY
const API_URL =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`

const AddMovie = () => {
    
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchResult, setSearchResult] = useState<Array<string>>([]);
    
    useEffect(()=>{
      MovieSearch(searchInput)
    },[searchInput])

    const MovieSearch = async (query:string) =>{
      if (query && searchInput.length >= 4){
        const response = await fetch(`${API_URL}&query=${query}`)
        const data = await response.json();
        const filter  = await data.results.filter( (x:any) => x.original_language =="en")
        const results:Array<string> = await filter.map((x:any) => x.title)
        const uniqueResults:Array<string> = [...(new Set(results))]

        setSearchResult(uniqueResults)
      }
      else{
        setSearchResult([])
      }
    }
    const changeAutocomplete = (e:any) => {
      setSearchInput(e.target.value);
      MovieSearch(searchInput); 
    }

    return (
        <label>
          <Autocomplete
          id="teste"
          options={searchQuery? searchQuery:""}
          sx={{width:300}}
          renderInput={(params) => <TextField {...params} onChange={(e) => changeAutocomplete(e)} onClick={(e) => changeAutocomplete(e)} label="Movie" />}
          />
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
