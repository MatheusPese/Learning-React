import React, { Component } from 'react'

type MovieProps = {movie_index:number}
let movies = [{
    id:0,
    title:"Spiderman Far From Home",
    status:"Watched"
},
{
    id:1,
    title:"Doctor Strange (2016)",
    status:"Plan to watch"
},
{
    id:2,
    title:"Doctor Strange in the Multiverse of Madness",
    status:"Watched"
}
]
const Movies = (props:MovieProps) => {

    return <div className='movie'>
    <div title={movies[props.movie_index].title}>{movies[props.movie_index].title}</div>
    <div >Status: {movies[props.movie_index].status}</div>
    </div>
}

const MovieList = () =>{
    return (
        <>
        <h3>MyMovieList:</h3>
        <div className="movieList">
        {movies.map((movie) => <Movies key={movie.id} movie_index={movie.id} />)}
        </div>
        <br/>
        </>
      )
}
    
export default MovieList