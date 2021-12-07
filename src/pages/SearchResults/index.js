import React, { useCallback, useEffect, useRef } from 'react';
import ListOfGits from 'components/ListOfGifs/ListOfGifs';
import Spinner from 'components/Spinner';
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';

export default function SearchResults({ params }) {
    const { keyword } = params;
    const keywordFormated = decodeURI(keyword);
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
                    <Helmet>
                        <title>{`${gifs.length} resultado de ${keywordFormated}`}</title>
                        <meta name="description" content={keywordFormated} />
                    </Helmet>
                    <div className="App-wrapper">
                        <h3 className="App-title">
                            {keywordFormated}
                        </h3>

                        <ListOfGits gifs={gifs} />

                        <div id="visor" ref={visorRef}></div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    );
}