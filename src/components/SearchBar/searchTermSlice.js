import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        updateSearchTerm: (state, action) => {
            return action.payload;
        }
    }

})

//selectors

export const selectSearchTerm = (state) => state.searchTerm

// //export actions and reducers

export const { updateSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;