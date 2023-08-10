import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchResults, selectSearchResults, updateSearchResults } from "./searchResultsSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import { fetchNextPage } from "../api";
import { selectSearchTerm } from "../SearchBar/searchTermSlice";

export const SearchResults = () => {
    const results = useSelector(selectSearchResults);
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1);
    let nextPageResults;
    
    const getNextPage = async () => {
        try {
            nextPageResults = await fetchNextPage(searchTerm, pageNumber + 1);
        } catch (rejectedValueOrSerializedError) {
            throw new Error(rejectedValueOrSerializedError);
        }
        dispatch(clearSearchResults());
        nextPageResults.Search.map(element => {
            dispatch(updateSearchResults(element));
            return element;
        })
        setPageNumber(pageNumber => pageNumber + 1);

    }

    const getPrevPage = async () => {
        if(pageNumber === 1) {
            return;
        }
        try {
            nextPageResults = await fetchNextPage(searchTerm, pageNumber - 1);
        } catch (rejectedValueOrSerializedError) {
            throw new Error(rejectedValueOrSerializedError);
        }
        dispatch(clearSearchResults());
        nextPageResults.Search.map(element => {
            dispatch(updateSearchResults(element));
            return element;
        })
        setPageNumber(pageNumber => pageNumber - 1);

    }
    
    return (
        <div>
            {results.map(movie => {
                return (
                    <MovieCard movie = {movie} />
                )
            })}
            {(pageNumber !== 1) ? (<button onClick={getPrevPage}>PrevPage</button>) : null}
            {(results.length === 0) ? null : (<button onClick={getNextPage}>NextPage</button>)}
        </div>
    )
}