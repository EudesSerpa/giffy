import { useContext, useEffect} from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

export function useGifs({ keyword } = { keyword: null}) {
    const { gifs, setGifs } = useContext(GifsContext);

    useEffect(function() {
        // Recuperar keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs);

                // Guardar keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword);
            });
    }, [ keyword, setGifs ]);


    return { gifs };
}