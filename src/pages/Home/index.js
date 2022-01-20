import React from "react";
import { Helmet } from "react-helmet";

import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

import { useGifs } from "hooks/useGifs";

export default function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
        <link rek="canonical" href="https://giffys-search.vercel.app/" />
      </Helmet>

      <header className="headerNav">
        <SearchForm />
      </header>

      <div className="App-wrapper">
        <section className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>

          <div className="App-category">
            <TrendingSearches />
          </div>
        </section>
      </div>
    </>
  );
}
