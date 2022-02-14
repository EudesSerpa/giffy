import React, { useState } from "react";

import useUser from "hooks/useUser";

import Modal from "components/Modal";
import Login from "components/Login";
import Register from "components/Register";

import "./Fav.css";

function Fav({ id }) {
  const { isLogged, favs, addFav, removeFav, loadingFav } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [isNavLogin, setIsNavLogin] = useState(true);

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
      <button onClick={handleClick} className="gf-Fav" disabled={loadingFav}>
        <span aria-label={label} title={label} role="img">
          {emoji}
        </span>
      </button>

      {showModal && (
        <Modal onClose={handleClose}>
          <nav className="navModal">
            <ul>
              <li
                className={`btnNavModal ${isNavLogin ? "active" : ""}`}
                onClick={() => setIsNavLogin(true)}
              >
                Login
              </li>
              <li
                className={`btnNavModal ${isNavLogin ? "" : "active"}`}
                onClick={() => setIsNavLogin(false)}
              >
                Register
              </li>
            </ul>
          </nav>
          {isNavLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Register onRegister={handleLogin} />
          )}
        </Modal>
      )}
    </>
  );
}

export default Fav;
