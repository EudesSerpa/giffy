import { useContext, useEffect, useState } from "react";

import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating, language } = { keyword: "" }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);

  const keywordToUse = keyword || sessionStorage.getItem("lastKeyword") || "";

  useEffect(() => {
    // Get gifs and save keyword in cache
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating, language }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);

      sessionStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keywordToUse, setGifs, rating, language]);

  useEffect(() => {
    // Paginacion: Infinite Scroll
    if (page === INITIAL_PAGE) return;
    setLoadingPage(true);

    getGifs({ keyword: keywordToUse, page, rating, language }).then(
      (nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingPage(false);
      }
    );
  }, [keywordToUse, page, setGifs, rating, language]);

  return { loading, loadingPage, gifs, setPage };
}
