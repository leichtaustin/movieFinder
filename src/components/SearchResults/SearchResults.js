import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults, updateSearchResults } from "./searchResultsSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import { fetchNextPage } from "../api";
import { selectSearchTerm } from "../SearchBar/searchTermSlice";
import './searchResults.css';


//component for search results after calling api
export const SearchResults = () => {
    const results = useSelector(selectSearchResults);
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1);
    let nextPageResults;
    
    //load next page of movie results
    const getNextPage = async () => {
        try {
            nextPageResults = await fetchNextPage(searchTerm, pageNumber + 1);
        } catch (rejectedValueOrSerializedError) {
            throw new Error(rejectedValueOrSerializedError);
        }
        nextPageResults.Search.map(element => {
            dispatch(updateSearchResults(element));
            return element;
        })
        setPageNumber(pageNumber => pageNumber + 1);

    }
   
    return (
        <div>
            <div className="searchResultsContainer">
                {results.map(movie => {
                    return (
                        <MovieCard movie = {movie} />
                    )
                })}
            </div>
            {(results.length === 0) ? null : (<button onMouseOver={getNextPage}>NextPage</button>)}
        </div>

    )
}