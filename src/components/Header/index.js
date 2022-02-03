import React from "react";
import { Link } from "wouter";

import useUser from "hooks/useUser";

import "./Header.css";

function Header() {
  const { isLogged, logout } = useUser();

  return (
    <header className="App-wrapper">
      <nav className="Nav-main">
        {isLogged ? (
          <>
            <Link to="/favs">Favorites</Link>
            <Link to="/login" onClick={logout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
