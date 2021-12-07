import React from "react";
import { Link } from "wouter";

import "./Category.css";

function Category({name, options = []}) {
    const optionList = options.map(option => (
        <li key={option} className="Category-list--item">
            <Link to={`/search/${option}`} className="Category-link">
                { option }
            </Link>

        </li>
    ));

    return (
        <section className="Category">
            <h3 className="Category-title">{ name }</h3>
            <ul className="Category-list">
                { optionList }
            </ul>
        </section>
    )
}

export default Category;