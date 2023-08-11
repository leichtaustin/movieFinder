import { createSlice } from '@reduxjs/toolkit';

//slice used to add movies to a favorites playlist

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addToFavorites: (state, action) => {
            return [
                ...state,
                action.payload,
            ]
        },
        removeFromFavorites: (state, action) => {
            return state.filter(movie => movie.imdbID !== action.payload.imdbID);
        }
    }
})

export const selectFavorites = (state) => state.favorites;

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;