import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, updateSearchTerm } from './searchTermSlice';
import { fetchMovieData } from '../api';
import { clearSearchResults, updateSearchResults } from '../SearchResults/searchResultsSlice';


export const SearchBar = () => {
    
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    let searchResults; 
    
    const onSearchChange = (e) => {
        e.preventDefault();
        const userInput = e.target.value;
        dispatch(updateSearchTerm(userInput));

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(searchTerm.length < 1) {
            return;
        }
        try {
          searchResults = await fetchMovieData(searchTerm)
          // handle result here

        } catch (rejectedValueOrSerializedError) {
          // handle error here
          throw new Error(rejectedValueOrSerializedError)
        }
        dispatch(clearSearchResults());
        searchResults.Search.map(element => {
            dispatch(updateSearchResults(element));
            return element;
        })
      }
    return (
        <div className='searchBarContainer'>
            <form onSubmit={handleSubmit}>
                <input type='text' id='movieSearch' onChange={onSearchChange}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}