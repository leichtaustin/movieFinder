import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, updateSearchTerm } from './searchTermSlice';
import { fetchMovieData } from '../api';
import { clearSearchResults, updateSearchResults } from '../SearchResults/searchResultsSlice';
import './searchBar.css';

//component for search bar and title text
export const SearchBar = () => {
    
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    let searchResults; 
    
    //capture text change in search bar
    const onSearchChange = (e) => {
        e.preventDefault();
        const userInput = e.target.value;
        dispatch(updateSearchTerm(userInput));

    }
    //handle search bar submit
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
        <div data-testid="searchBar-1">
            <header>
                <h1 id='introText'>Movie Library Search Engine</h1>
                <p id='introText'>Enter a keyword into the search bar below and find a selection of related movies</p>
            </header>
            <div className='searchBarContainer'>
                <form onSubmit={handleSubmit}>
                    <input type='text' id='movieSearch' onChange={onSearchChange} maxLength={20}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        </div>
    )
}