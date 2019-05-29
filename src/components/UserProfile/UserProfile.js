import React from 'react';
import './UserProfile.css';

const UserProfile = (props) =>{

    const movieList = props.favoriteMovies.map((movie, index)=>{
      return <li key={index}>{movie}</li>
    })

    return(
        <div className="userProfile">
            <h1 className="userName">{props.name}</h1>
  
            <div id="userDetails">
              <div>
                <h3 className="fromTitle">From: </h3>
                <p id="from">{props.from}</p>
              </div>
              
              <div>
                <h3 className="titleLabel">Title: </h3>
                <p className="title">{props.title}</p>
              </div>
              
              <div>
                <h3 id="employerTitle"> Employer:</h3>
                <p id="employer">{props.employer}</p>
              </div>
            </div>
  
              <div className="favoriteMovies">
                <h3 id="movieLabel">Favorite Movies: </h3>
                <ol id="favoriteMovies">
                {movieList}
                </ol>
              </div>
  
        </div>
    )
}

export default UserProfile;