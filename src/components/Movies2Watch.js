import React, { useEffect, useState } from "react";
import Movie from './Movie';
 
const FEATURED_API =
  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;
const SEARCH_API =
  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=`;


function Movies2Watch() {
    //new state variable to get movies
    const [movies, setMovies] = useState([]);
    //react hook to get searched movies
    const [searchTerm,setSearchTerm] = useState('');
    
    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    //getting data of featured api
    const getMovies = (API) =>{
        fetch(API)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
        });
    }

    //get searched movies
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(searchTerm){
        getMovies(SEARCH_API + searchTerm);
        //empty after search
        setSearchTerm("");
        }
    }; 

    const handleOnChange = (e) =>{
        setSearchTerm(e.target.value);

        
    }
    return (
        <>
            <form className='searchForm' onSubmit={handleOnSubmit}>
                <input className="search" type="text" placeholder="Search..." value={searchTerm}  onChange={handleOnChange}/>
            </form>
            <div className="movie_container">
                {movies.length > 0 &&
                movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
        </>
    )
}

export default Movies2Watch;
