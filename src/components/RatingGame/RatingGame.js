import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRatingGame, setPlayingStatus, setMovieA, setMovieB, selectMovieA, selectMovieB } from './ratingGameSlice';
import './ratingGame.css';
import { fetchExtraInfo } from '../api';
import { RatingGameCard } from './ratingGameCard';

export const RatingGame = () => {

    const dispatch = useDispatch();
    let playingStatus = useSelector(selectRatingGame).isPlaying; 
    let movieA;
    let movieB;
    let stateMovieA = useSelector(selectRatingGame).movieA;
    let stateMovieB = useSelector(selectRatingGame).movieB;

    const togglePlay = async (e) => {
        e.preventDefault();
        if(playingStatus) {
            dispatch(setPlayingStatus(false));

        } else {
            dispatch(setPlayingStatus(true));
            await loadMovies();
            dispatch(setMovieA(movieA));
            dispatch(setMovieB(movieB));

        }
    }

    const loadMovies = async () => {
        let movieIdA = `tt00${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
        let movieIdB = `tt00${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
        try {
            movieA = await fetchExtraInfo(movieIdA);
            // handle result here
  
          } catch (rejectedValueOrSerializedError) {
            // handle error here
            throw new Error(rejectedValueOrSerializedError)
          }
          try {
            movieB = await fetchExtraInfo(movieIdB);
            // handle result here
  
          } catch (rejectedValueOrSerializedError) {
            // handle error here
            throw new Error(rejectedValueOrSerializedError)
          }
    }

    return (
        <div className='ratingGameContainer'>
            {(playingStatus) ? (
                <div>
                    <RatingGameCard movie={stateMovieA} />
                    <RatingGameCard movie={stateMovieB} />
                    <button onClick={togglePlay}>Quit Game</button>
                </div>
            ) : (
                <div className='gamePromptContainer'>
                    <h3>Test Your Skills on Movie Popularity...</h3>
                    <button id='playButton' onClick={togglePlay}>Play</button>
                </div>
            )}

        </div>
    )
}