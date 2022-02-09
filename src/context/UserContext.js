import React, { useEffect, useState } from "react";
import getFavs from "services/getFavs";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Get favs on login
    if (!isLogged) return setFavs([]);

    getFavs()
      .then(setFavs)
      .catch((error) => {
        console.log(error.message);
      });
  }, [isLogged]);

  return (
    <Context.Provider
      value={{
        favs,
        isLogged,
        setFavs,
        setIsLogged,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
