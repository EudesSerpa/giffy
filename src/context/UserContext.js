import React, { useEffect, useState} from "react";
import getFavs from "services/getFavs";

const Context = React.createContext({});


// Creamos nuestro propio provider
export function UserContextProvider({ children }) {
    const [favs, setFavs] = useState([]);
    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem("jwt")
    );

    // Issue: Error in the fetch of the favs for CORS
    useEffect(() => {
        if(!jwt) return setFavs([]);

        getFavs({jwt})
            .then(favs => {
                console.log(favs);
                setFavs(favs)}
            ).catch (error => {
                console.log(error);
            })
    }, [jwt])


    return (
        <Context.Provider value={{
            favs,
            jwt,
            setFavs,
            setJWT,
        }}>
            {children}
        </Context.Provider>
    );
}

export default Context;