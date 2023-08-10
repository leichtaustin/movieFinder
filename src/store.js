import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchTermSliceReducer from './components/SearchBar/searchTermSlice';
import searchResultsSliceReducer from './components/SearchResults/searchResultsSlice';
import favoritesSliceReducer from './components/Favorites/favoritesSlice';


export default configureStore({
    reducer: {
        searchTerm: searchTermSliceReducer,
        searchResults: searchResultsSliceReducer,
        favorites: favoritesSliceReducer,
    }
})

const rootReducer = combineReducers({
    searchTerm: searchTermSliceReducer,
    searchResults: searchResultsSliceReducer,
    favorites: favoritesSliceReducer,
})

export const setupStore = preloadedState => {
    return configureStore({
        reducer: rootReducer, 
        preloadedState
    })
}