import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../utils/test-utils';
import App from '../App';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { SearchResults } from '../components/SearchResults/SearchResults';
import { updateSearchTerm } from '../components/SearchBar/searchTermSlice';
import { setupStore } from '../store';


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



