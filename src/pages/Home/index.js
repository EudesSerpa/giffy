import React, { useCallback } from 'react';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';

import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';

import { useGifs } from 'hooks/useGifs';

export default function Home() {
    const [_, pushLocation] = useLocation();
    const { gifs } = useGifs();

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>

            <SearchForm onSubmit={handleSubmit} />

            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>

                    <div className="App-category">
                        <TrendingSearches />
                    </div>
                </div>
            </div>
        </>
    );
}