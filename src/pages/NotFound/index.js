import React from "react";
import { Link } from "wouter";
import './style.css';

function NotFound() {
    return (
        <div className="NotFound-main">
            <h1>404</h1>
            <p>Page not found</p>

            <Link to="/">Go back ⬅</Link>
        </div>
    );
}

export default NotFound;