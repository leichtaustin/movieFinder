import { createSlice } from "@reduxjs/toolkit";


export const ratingGameSlice = createSlice ({
    name: 'ratingGame',
    initialState: {
        totalScore: 0,
        strikeCount: 0,
        movieA: {Title: '...Loading Movie Info',},
        movieB: {Title: ''},
        isPlaying: false,
    },
    reducers: {
        setPlayingStatus: (state, action) => {
            return {
                ...state,
                isPlaying: action.payload,
            }
        },
        setMovieA: (state, action) => {
            return {
                ...state,
                movieA: action.payload,
            }
        },
        setMovieB: (state, action) => {
            return {
                ...state,
                movieB: action.payload,
            }
        }
    }
})


export const selectRatingGame = (state) => state.ratingGame;
export const selectMovieA = (state) => state.movieA;
export const selectMovieB = (state) => state.movieB;

export const { setPlayingStatus, setMovieA, setMovieB } = ratingGameSlice.actions;
export default ratingGameSlice.reducer;