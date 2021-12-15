import React from "react";
import { Link } from "wouter";
import { Helmet } from 'react-helmet';

import './style.css';


function NotFound() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Not found page</title>
            </Helmet>
            <div className="NotFound-main">
                <h1>404</h1>
                <p>Page not found</p>

                <Link to="/">Go back ⬅</Link>
            </div>
        </React.Fragment>
    );
}

export default NotFound;