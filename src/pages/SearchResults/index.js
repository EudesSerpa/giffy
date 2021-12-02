import React, { useCallback, useEffect, useRef } from 'react';
import ListOfGits from 'components/ListOfGifs/ListOfGits';
import Spinner from 'components/Spinner';
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });

    const visorRef = useRef();
    const { isNearScreen } = useNearScreen({
        distance: '200px',
        externalRef: loading ? null : visorRef,
        once: false
    });

    const debounceHandleNextPage  = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage();
    }, [debounceHandleNextPage , isNearScreen])

    return (
        <React.Fragment>
            {loading
                ? <Spinner />
                : <React.Fragment>
                    <h3 className="App-title">
                        {decodeURI(keyword)}
                    </h3>

                    <ListOfGits gifs={gifs} />

                    <div id="visor" ref={visorRef}></div>
                </React.Fragment>
            }
        </React.Fragment>
    );
}