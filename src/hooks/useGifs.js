import { useContext, useEffect, useState } from "react";

import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating, language } = { keyword: "" }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);

  // Recuperar keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "trending";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating, language }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);

      // Guardar keyword en el localStorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, keywordToUse, setGifs, rating, language]);

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
