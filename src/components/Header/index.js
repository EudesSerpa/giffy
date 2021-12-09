import React from "react"
import { Link } from "wouter"

import useUser from "hooks/useUser";

import './Header.css';


function Header() {
    const { isLogged, logout } = useUser();


    return (
        <header className="gf-header">
            {
                isLogged
                    ? <Link to="/login" onClick={logout}>Logout</Link>
                    : <Link to="/login">Login</Link>
            }
        </header>
    )
}

export default Header;