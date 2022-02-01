import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

import GifsContext from "context/GifsContext";
import getGifs from "services/getGifs";


const GIFS_TO_DISPLAY = 12;

export default function Home() {
  const { gifs: gifsCached } = useContext(GifsContext);

  const [lastGifs, setLastGifs] = useState([]);
  
  useEffect(() => {
    // Get gifs from cache or API
    let didCancel = false;
    
    if(!didCancel) {
      if(gifsCached.length) {
        const lastGifsFetched = gifsCached.slice(0, GIFS_TO_DISPLAY);
        setLastGifs(lastGifsFetched);
      } else {
        getGifs({limit: GIFS_TO_DISPLAY})
          .then(setLastGifs);
      } 
    }

    return () => {
      didCancel = true;
    };
  }, [gifsCached]);


  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
        <link rek="canonical" href="https://giffys-search.vercel.app/" />
      </Helmet>

      <header className="headerSearchForm">
        <SearchForm />
      </header>

      <section className="App-main App-wrapper">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={lastGifs} />
        </div>

        <div className="App-category">
          <TrendingSearches />
        </div>
      </section>
    </>
  );
}
