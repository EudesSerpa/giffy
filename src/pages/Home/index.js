import React, { useCallback } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGits from 'components/ListOfGifs/ListOfGits';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';

import './styles.css';
import SearchForm from 'components/SearchForm';

export default function Home() {
    const [_, pushLocation] = useLocation();
    const { gifs } = useGifs();

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <React.Fragment>
            <SearchForm onSubmit={handleSubmit} />

            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGits gifs={gifs} />

            <TrendingSearches />
        </React.Fragment>
    );
}