import React, { Component, useEffect, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

***REMOVED***
const API_URL ***REMOVED***

const AddMovie = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<any>([]);
    
    useEffect(()=>{
      MovieSearch(searchInput)
    },[searchInput])

    const MovieSearch = async (query:string) =>{
      if (query && searchInput.length >= 4){
        const response = await fetch(`${API_URL}&query=${query}`)
        const data = await response.json();
        const results  = await data.results.map((x:any) => x.original_language =="en"? x.title:"")
        console.log(results)
        const uniqueResults = [...(new Set(results))]

        setSearchQuery(uniqueResults)
      }
      else{
        setSearchQuery([])
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
