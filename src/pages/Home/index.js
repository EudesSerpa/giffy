import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGits from 'components/ListOfGifs/ListOfGits';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';

import './styles.css';

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [_, pushLocation] = useLocation();
    const { gifs } = useGifs();


    const handleSubmit = (event) => {
        event.preventDefault();
        pushLocation(`/search/${keyword}`);
    }


    const handleInput = (event) => {
        setKeyword(event.target.value);
    }


    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input type="search" value={keyword} onChange={handleInput} placeholder="Search a gif here..." />
            </form>

            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGits gifs={gifs} />

            <TrendingSearches />
        </React.Fragment>
    );
}