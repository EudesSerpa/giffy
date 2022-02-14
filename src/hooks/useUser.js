import { useState, useCallback, useContext } from "react";

import UserContext from "context/UserContext";

import loginService from "services/login";
import addFavService from "services/addFav";
import deleteFav from "services/deleteFav";

export default function useUser() {
  const { favs, setFavs, jwt, setJWT } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [loadingFav, setLoadingFav] = useState(false);
  const [error, setError] = useState(false);

  const addFav = useCallback(
    ({ id }) => {
      setLoadingFav(true);
      addFavService({ id, jwt })
        .then((favs) => {
          setFavs(favs);
          setLoadingFav(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoadingFav(false);
        });
    },
    [jwt, setFavs]
  );

  const removeFav = useCallback(
    ({ id }) => {
      setLoadingFav(true);
      deleteFav({ id, jwt })
        .then((favs) => {
          setFavs(favs);
          setLoadingFav(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoadingFav(false);
        });
    },
    [jwt, setFavs]
  );

  const login = useCallback(
    ({ username, password }) => {
      setLoading(true);

      loginService({ username, password })
        .then((jwt) => {
          window.sessionStorage.setItem("jwt", jwt);
          setJWT(jwt);

          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          console.log(error.message);
          window.sessionStorage.removeItem("jwt");

          setLoading(false);
          setError(true);
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    favs,
    addFav,
    removeFav,
    loadingFav,
    login,
    logout,
    isLoginLoading: loading,
    hasLoginError: error,
    setError,
  };
}
