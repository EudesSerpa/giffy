import React from 'react';
import ListOfGits from 'components/ListOfGifs/ListOfGits';
import { useGifs } from 'hooks/useGifs';


export default function SearchResults({ params }) {
    const { keyword } = params;

    const { gifs, setPage } = useGifs({ keyword });

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <React.Fragment>
            <h3 className="App-title">
                {decodeURI(keyword)}
            </h3>

            <ListOfGits gifs={gifs} />

            <br />

            <button onClick={handleNextPage}>Get next page</button>
        </React.Fragment>
    );
}