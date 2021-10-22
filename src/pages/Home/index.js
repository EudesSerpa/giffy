import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGits from '../../components/ListOfGits';
import { useGifs } from '../../hooks/useGifs';


const POPULAR_GIFTS = [
    "Rick y Morty",
    "One Piece",
    "Kimetsu No Yaiba"
];

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [_, pushLocation] = useLocation();
    const { gifs } = useGifs();

    const popular_gifs = POPULAR_GIFTS.map(gif => (
        <li key={gif}>
            <Link to={`/search/${gif}`}>Gifs de {`${gif}`}</Link>
        </li>
    ));


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

            <h3 className="App-title">Los gifs más populares</h3>

            <ul>
                { popular_gifs }
            </ul>
        </React.Fragment>
    );
}