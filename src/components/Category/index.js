import React from "react";
import { Link } from "wouter";

import "./Category.css";

function Category({name, options = []}) {
    const optionList = options.map(option => (
        <li key={option}>
            <Link to={`/search/${option}`} className="Category-link">
                { option }
            </Link>

        </li>
    ));

    return (
        <div className="Category">
            <h3 className="Category-title">{ name }</h3>
            <ul className="Category-list">
                { optionList }
            </ul>
        </div>
    )
}

export default Category;