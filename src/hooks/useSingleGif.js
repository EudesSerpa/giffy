import { useEffect, useState, useContext } from "react";

import GifsContext from "context/GifsContext";
import getSingleGif from "services/getSingleGif";

export default function useSingleGif({ id }) {
  const { gifs } = useContext(GifsContext);
  const gifFromCache = gifs.find((gif) => gif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);

      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((error) => {
          console.log(error.message);
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
}
