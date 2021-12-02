import React, { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";
import TrendingSearches from "./TrendingSearches";

// Import fail: No acepta la sintaxis del import
/*const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
);*/


export default function LazyTrending() {
    const {isNearScreen, fromRef} = useNearScreen({ distance: '200px'});

    return <div ref={fromRef}>
        <Suspense fallback={'Cargando tendencias...'}>
            { isNearScreen ? <TrendingSearches /> : null }
        </Suspense>
    </div>
}