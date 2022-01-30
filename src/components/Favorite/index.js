import React, { useState } from "react";

import useUser from "hooks/useUser";

import Login from "components/Login";
import Modal from "components/Modal";

import "./Fav.css";

function Fav({ id }) {
  const [showModal, setShowModal] = useState(false);
  const { isLogged, favs, addFav, removeFav } = useUser();

  const isFaved = favs.some((favId) => favId === id);

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤️"];

  const handleClick = () => {
    if (!isLogged) return setShowModal(true);

    isFaved ? removeFav({ id }) : addFav({ id });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleClick} className="gf-Fav">
        <span aria-label={label} title={label} role="img">
          {emoji}
        </span>
      </button>

      {showModal && (
        <Modal onClose={handleClose}>
          <h2>Login</h2>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
}

export default Fav;
