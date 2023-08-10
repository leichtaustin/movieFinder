import { createSlice } from "@reduxjs/toolkit";


export const searchResultsSlice = createSlice({
    name: 'searchResults',
    initialState: {
        searchResults: [],
    },
    reducers: {
        updateSearchResults: (state, action) => {
            return {
                ...state,
                searchResults: [...state.searchResults,
                    action.payload],
                }
            
        },
        clearSearchResults: (state, action) => {
            return {
                ...state,
                searchResults: [],
            }
        }
    }
})

export const selectSearchResults = (state) => state.searchResults.searchResults;

export const { updateSearchResults, clearSearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;