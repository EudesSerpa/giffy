import { useState, useCallback, useContext } from "react";

import UserContext from "context/UserContext";

import loginService from "services/login";
import addFavService from "services/addFav";
import deleteFav from "services/deleteFav";

export default function useUser() {
  const { favs, jwt, setFavs, setJWT } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addFav = useCallback(
    ({ id }) => {
      addFavService({ id, jwt })
        .then(setFavs)
        .catch((error) => {
          console.log(error.message);
        });
    },
    [jwt, setFavs]
  );

  const removeFav = useCallback(
    ({ id }) => {
      deleteFav({ id, jwt })
        .then(setFavs)
        .catch((error) => {
          console.log(error.message);
        });
    },
    [jwt, setFavs]
  );

  const login = useCallback(
    ({ username, password }) => {
      setLoading(true);

      loginService({ username, password })
        .then((jwt) => {
          window.localStorage.setItem("jwt", jwt);

          setLoading(false);
          setError(false);
          setJWT(jwt);
        })
        .catch((error) => {
          console.log(error.message);
          window.localStorage.removeItem("jwt");

          setLoading(false);
          setError(true);
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem("jwt");
    setJWT(null);
  }, [setJWT]);

  return {
    favs,
    isLogged: Boolean(jwt),
    addFav,
    removeFav,
    login,
    logout,
    isLoginLoading: loading,
    hasLoginError: error,
    setError,
  };
}
