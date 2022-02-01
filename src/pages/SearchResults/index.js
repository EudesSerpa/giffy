import React, { useState, useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Spinner from "components/Spinner";
import SearchForm from "components/SearchForm";
import ButtonBackToTop from "components/ButtonBactToTop";

import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";

export default function SearchResults({ params }) {
  const { keyword = "", rating = "g", language = "en" } = params;
  const keywordFormated = decodeURI(keyword);

  const [showButton, setShowButton] = useState(false);
  const { loading, loadingPage, gifs, setPage } = useGifs({
    keyword,
    rating,
    language,
  });

  const visorRef = useRef();
  const { isNearScreen } = useNearScreen({
    distance: "200px",
    externalRef: loading ? null : visorRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  );

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage();
      setShowButton(true);
    }
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{`${gifs.length} resultado de ${keywordFormated}`}</title>
            <meta name="description" content={keywordFormated} />
          </Helmet>

          <header className="headerSearchForm">
            <SearchForm
              initialKeyword={keywordFormated}
              initialRating={rating}
              initialLanguage={language}
            />
          </header>

          <div className="App-wrapper">
            <h3 className="App-title">{keywordFormated}</h3>

            <ListOfGifs gifs={gifs} />

            {loadingPage && <Spinner />}
            {showButton && <ButtonBackToTop />}

            <div id="visor" ref={visorRef}></div>
          </div>
        </>
      )}
    </>
  );
}
