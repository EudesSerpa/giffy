import React from 'react';
import ListOfGits from '../../components/ListOfGits';
import { useGifs } from '../../hooks/useGifs';


export default function SearchResults({ params }) {
    const { keyword } = params;

    const { gifs } = useGifs({ keyword });

    return (
        <React.Fragment>
            <h3 className="App-title">
                {decodeURI(keyword)}
            </h3>

            <ListOfGits gifs={gifs} />
        </React.Fragment>
    );
}