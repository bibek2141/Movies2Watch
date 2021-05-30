import React, { useCallback, useState, useEffect } from "react";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average, id }) => {
  //new state varibale to display description
  const [showText, setShowText] = useState(false);
  const [video, setVideos] = useState([]);
  //send to movie description on moviedb website
  const viewMovie = ()=> {
    const MOVIE_API = "https://www.themoviedb.org/movie/" + id;
    window.location.href = MOVIE_API;
    console.log(MOVIE_API);
  } 
  //use effect to fetch movie trailer link
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(
        (result) => {
          setVideos(result);
        }
      )
  })
  //send to youtube link 
  const watchTrailer = ()=> {
    const MOVIE_TRAILER = `https://www.youtube.com/watch?v=${video.results[0].key}`;
    console.log(MOVIE_TRAILER.id);
    window.location.href = MOVIE_TRAILER;
  }  
  // here we added [isToggled, setIsToggled] as a second parameter
  const onClick = useCallback(() => {
    setShowText(!showText);
  }, [showText]);
  return (
    <div className="movie">
      <div className="movie-header">
        <img src={IMAGE_API + poster_path} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
          <span onClick={onClick}>
            <i className="fas fa-info-circle pointer"></i>
          </span>
        </div>
      </div>
      {showText ? (
        <div className="movie-summary">
          <div className="titleInfoDiv">
            <h2>Summary</h2>
            <span className="times" onClick={onClick}>
              <i  className="fas fa-times pointer"></i>
            </span>
          </div>

          <p>{overview}</p>
        </div>
      ) : null}
      <div className="list titleInfoDiv">
        <input type="button" className ='btn' onClick={viewMovie} value="view" />
        <input type="button" className ='btn' onClick={watchTrailer} value="Watch Trailer" />
      </div>
    </div>
  );
};

export default Movie;
