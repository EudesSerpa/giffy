import React from "react";
import { useLocation } from "wouter";

import useUser from "hooks/useUser";

import './Fav.css';


function Fav({ id }) {
    const { isLogged, favs, addFav } = useUser();
    const [_, navigate] = useLocation();

    const isFaved = favs.some(favId => favId === id);

    const [label, emoji] = isFaved
        ? ["Remove Gif from favorites", "❌"]
        : ["Add Gif to favorites", "💖"];


    const handleClick = () => {
        if(!isLogged) return navigate("/login");

        addFav({ id });
        // isFaved ? deleteFav({ id }) : addFav({ id });
    }

    return (
        <button onClick={handleClick} className="gf-Fav">
            <span aria-label={label} title={label} role='img'>
                {emoji}
            </span>
        </button>
    )
}


export default Fav;