import React from 'react';
import './ratingGameCard.css';


export const RatingGameCard = (props) => {
    return (
    <div>
        <div className='movieInfoMain'>
            <div className='basicData'>
                <h3>{props.movie.Title}</h3>
                <p>Year: {props.movie.Year}</p>
            </div>
            <img src={props.movie.Poster} id='moviePoster' alt='movie poster'/>
        </div>
    </div>
    )
}