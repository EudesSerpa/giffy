import React, { useCallback, useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";

import ListOfGifs from "components/ListOfGifs/ListOfGifs";

import useUser from "hooks/useUser";
import GifsContext from "context/GifsContext";

import { API_KEY, API_URL } from "services/settings.js";

export default function Favs() {
  const { gifs } = useContext(GifsContext);
  const { favs } = useUser();
  const [favGifs, setFavGifs] = useState([]);

  const favGifsCached = gifs.filter((gif) => favs.includes(gif.id));

  // Get all favs that aren't in cached
  const gifData = useCallback(() => {
    const gifIds = favGifsCached.map((gif) => gif.id);
    const favGifsToFetch = favs.filter((id) => !gifIds.includes(id));

    const promises = favGifsToFetch.map(async (id) => {
      const response = await fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`);
      return await response.json();
    });

    Promise.all(promises)
      .then((gifsArray) => {
        const data = gifsArray.map((resp) => resp.data);

        const gifsData = data.map((gif) => {
          const { images, title, id } = gif;
          const { url } = images.downsized_medium;

          return { title, id, url };
        });

        setFavGifs(favGifsCached.concat(gifsData));
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [favGifsCached, favs]);

  useEffect(() => {
    let didCancel = false;

    if (!favs.length > 0) return null;

    if (!didCancel) {
      gifData();
    }

    return () => {
      didCancel = true;
    };
  }, [favs.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>Favorite Gifs || Giffy</title>
      </Helmet>

      <div className="App-wrapper">
        <h3 className="App-title">Favorites</h3>
        <ListOfGifs gifs={favGifs} />
      </div>
    </>
  );
}
