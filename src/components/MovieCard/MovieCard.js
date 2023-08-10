import React, {useState } from 'react';
import './movieCard.css';
import { fetchExtraInfo } from '../api';
import { addToFavorites, removeFromFavorites } from '../Favorites/favoritesSlice';
import { useDispatch } from 'react-redux';




export const MovieCard = (props) => {
    let addedInfo;
    const [extraInfoToggle, setExtraInfoToggle] = useState(false);
    const [extraInfo, setExtraInfo] = useState({});
    const [favoriteStatus, setFavoriteStatus] = useState(false);
    const dispatch = useDispatch();

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
        document.getElementById('moreInfo').style.display = 'none';
        
    }
    const handleMinimize = (e) => {
        e.preventDefault();
        setExtraInfoToggle(false);
        document.getElementById('moreInfo').style.display = 'block';
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
                <button id='moreInfo' onClick={getExtraInfo}>See more info</button>
                {(favoriteStatus) ? (<button onClick={handleRemoveFromFavorites}>-</button>) : <button id='addToPlaylist' onClick={handleAddToFavorites}>+</button>}
            </div>
            <p>{extraInfoToggle ? (
                <div>
                    <p>{extraInfo.Metascore}</p>
                    <button onClick={handleMinimize}>Minimize Info</button>
                </div>

                ) : ''}</p>

        </div>
    )

}