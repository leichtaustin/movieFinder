import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../utils/test-utils';
import App from '../App';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { SearchResults } from '../components/SearchResults/SearchResults';
import { selectSearchTerm, updateSearchTerm } from '../components/SearchBar/searchTermSlice';
import { setupStore } from '../store';
import searchTermSliceReducer from '../components/SearchBar/searchTermSlice';
import { useSelector } from 'react-redux';
import { fetchMovieData } from '../components/api';


test('test', () => {
    expect(true).toBe(true);
});

test('render searchBar', () => {
    const store = setupStore()
    store.dispatch(updateSearchTerm('star wars'));

    renderWithProviders(<SearchBar />, { store })
    const searchBarElement = screen.getByTestId('searchBar-1');
    expect(searchBarElement).toBeInTheDocument();
})

describe('searchBarReducer', () => {
    it('should return the initial state', () => {
        const expected = '';

        const result = searchTermSliceReducer(undefined, {});
        expect(result).toEqual(expected);
    });
})

it('should return a movie with data', async () => {
    const expectedMovieData = {
        Title: 'Star Wars: Episode IV - A New Hope',
        Year: '1977'
    }

    const resultsArray = await fetchMovieData('star');

    expect(resultsArray.Search[0].Title).toEqual(expectedMovieData.Title);
})



