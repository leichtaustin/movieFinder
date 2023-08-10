// import { createAsyncThunk } from "@reduxjs/toolkit";

// const searchMovieData = createAsyncThunk(
//     'queryMovies/getQueryMovies',
//     async (searchTerm) => {
//         const apiKey = 'a6d4b87d';
//         const baseURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=star&page=5`;
//         const params = `&s=${searchTerm}`;
//         const response = await fetch(`${baseURL}${params}`);
//         const jsonResponse = await response.json();
//         console.log(jsonResponse);
//     }
// )

export const fetchMovieData = async (searchTerm) => {
    const apiKey = 'a6d4b87d';
    const baseURL = `http://www.omdbapi.com/?apikey=${apiKey}`;
    const params = `&s=${searchTerm}`;
    const response = await fetch(`${baseURL}${params}`);
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    return jsonResponse;
}

export const fetchExtraInfo = async (movieId) => {
    const apiKey = 'a6d4b87d';
    const baseURL = `http://www.omdbapi.com/?apikey=${apiKey}`;
    const params = `&i=${movieId}`;
    const response = await fetch(`${baseURL}${params}`);
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    return jsonResponse;
}

export const fetchNextPage = async (searchTerm, pageNumber) => {
    const apiKey = 'a6d4b87d';
    const baseURL = `http://www.omdbapi.com/?apikey=${apiKey}`;
    const params = `&s=${searchTerm}&page=${pageNumber}`;
    const response = await fetch(`${baseURL}${params}`);
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    return jsonResponse;
}

// fetchMovieData("star");