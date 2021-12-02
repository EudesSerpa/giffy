import { useContext, useEffect, useState} from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null}) {
    const { gifs, setGifs } = useContext(GifsContext);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loading, setLoading] = useState(false);

    // Recuperar keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'trending';

    useEffect(function() {
        setLoading(true);

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);

                // Guardar keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword);
            });
    }, [ keyword, keywordToUse, setGifs ]);


    useEffect(() => {
        if (page === INITIAL_PAGE) return;

        getGifs({keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
            })
    }, [keywordToUse, page, setGifs])

    return { loading, gifs, setPage };
}