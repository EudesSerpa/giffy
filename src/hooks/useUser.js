import { useState, useCallback, useContext } from "react";

import UserContext from 'context/UserContext';

import loginService from 'services/login';
import addFavService from 'services/addFav';


export default function useUser() {
    const { favs, jwt, setFavs, setJWT } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const addFav = useCallback(({ id }) => {
        addFavService({ id, jwt })
            .then(setFavs)
            .catch (error => {
                console.log(error.message);
            })
    }, [jwt, setFavs])

    const login = useCallback(({ username, password }) => {
        setLoading(true);

        loginService({ username, password})
            .then(jwt => {
                window.sessionStorage.setItem('jwt', jwt);

                setLoading(false);
                setError(false);
                setJWT(jwt);
            })
            .catch (error => {
                window.sessionStorage.removeItem('jwt');

                setLoading(false);
                setError(true);
                console.log(error.message);
            })
    }, [setJWT]);

    const logout = useCallback(() => {
        window.sessionStorage.setItem('jwt');
        setJWT(null);
    }, [setJWT])

    return {
        favs,
        isLogged: Boolean(jwt),
        addFav,
        login,
        logout,
        isLoginLoading: loading,
        hasLoginError: error,
    }
}