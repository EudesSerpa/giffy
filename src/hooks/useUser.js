import { useState, useCallback, useContext } from "react";

import UserContext from "context/UserContext";

import loginService from "services/login";
import logoutService from "services/logout";
import addFavService from "services/addFav";
import deleteFav from "services/deleteFav";

export default function useUser() {
  const { favs, setFavs, isLogged, setIsLogged } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addFav = useCallback(
    ({ id }) => {
      addFavService({ id })
        .then(setFavs)
        .catch((error) => {
          console.log(error.message);
        });
    },
    [setFavs]
  );

  const removeFav = useCallback(
    ({ id }) => {
      deleteFav({ id })
        .then(setFavs)
        .catch((error) => {
          console.log(error.message);
        });
    },
    [setFavs]
  );

  const login = useCallback(
    ({ username, password }) => {
      setLoading(true);

      loginService({ username, password })
        .then((ok) => {
          setIsLogged(true);
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          console.log(error.message);
          setIsLogged(false);
          setLoading(false);
          setError(true);
        });
    },
    [setIsLogged]
  );

  const logout = useCallback(() => {
    logoutService()
      .then((ok) => {
        setError(false);
        setIsLogged(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLogged(true);
        setError(true);
      });
  }, [setIsLogged]);

  return {
    favs,
    isLogged,
    addFav,
    removeFav,
    login,
    logout,
    isLoginLoading: loading,
    hasLoginError: error,
    setError,
  };
}
