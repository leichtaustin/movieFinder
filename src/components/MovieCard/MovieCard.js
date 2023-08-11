import React, {useState } from 'react';
import './movieCard.css';
import { fetchExtraInfo } from '../api';
import { addToFavorites, removeFromFavorites } from '../Favorites/favoritesSlice';
import { useDispatch } from 'react-redux';


//JS file to cover movieCoard component

export const MovieCard = (props) => {
    let addedInfo;
    const [extraInfoToggle, setExtraInfoToggle] = useState(false);
    const [extraInfo, setExtraInfo] = useState({});
    const [favoriteStatus, setFavoriteStatus] = useState(false);
    const dispatch = useDispatch();

    //Toggle on screen to retrieve additional movie info from API and add to app
    const getExtraInfo = async (e) => {
        e.preventDefault();
        try {
            addedInfo = await fetchExtraInfo(props.movie.imdbID);
        } catch (rejectedValueOrSerializedError) {
            throw new Error(rejectedValueOrSerializedError);
        }
        console.log(extraInfo);
        setExtraInfoToggle(true);
        setExtraInfo(addedInfo);
        console.log(extraInfo.Metascore)
        document.getElementById(props.movie.imdbID).style.display = 'none';
        
    }
    //remove extra info function
    const handleMinimize = (e) => {
        e.preventDefault();
        setExtraInfoToggle(false);
        document.getElementById(props.movie.imdbID).style.display = 'block';
    }

    const handleAddToFavorites = (e) => {
        e.preventDefault();
        setFavoriteStatus(true);
        dispatch(addToFavorites(props.movie));
    }

    const handleRemoveFromFavorites = (e) => {
        e.preventDefault();
        setFavoriteStatus(false);
        dispatch(removeFromFavorites(props.movie));
    }


    return (
        <div className='movieCardContainer'>
            <div className='movieInfoMain'>
                <div className='basicData'>
                    <h3>{props.movie.Title}</h3>
                    <p>Year: {props.movie.Year}</p>
                </div>
                <img src={props.movie.Poster} id='moviePoster' alt='movie poster'/>
            </div>
            <div className='movieButtons' id='movieButtons'>
                <button id={props.movie.imdbID} onClick={getExtraInfo}>See more info</button>
                {(favoriteStatus) ? (<button onClick={handleRemoveFromFavorites}>-</button>) : <button id='addToPlaylist' onClick={handleAddToFavorites}>+</button>}
            </div>
            <p>{extraInfoToggle ? (
                <div className='extraInfo'>
                    <p id='releaseDate'><strong>Release Date:</strong> {extraInfo.Released}</p>
                    <p id='director'><strong>Director:</strong> {extraInfo.Director}</p>
                    <p id='plot'>{extraInfo.Plot}</p>
                    <p id='earnings'><strong>Box Office Earnings:</strong> {extraInfo.BoxOffice}</p>
                    <button onClick={handleMinimize}>Minimize Info</button>
                </div>

                ) : ''}</p>

        </div>
    )

}