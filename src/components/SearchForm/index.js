import React from "react";
import { useLocation } from "wouter";

import useForm from "./useForm";


const RATINGS = ["g", "pg", "pg-13", "r"];

const LANGUAGES = ['en', 'es', 'ja'];


function SearchForm({ initialKeyword = '', initialRating = 'g', initialLanguage = 'en' }) {
    const {
        keyword,
        language,
        rating,
        times,
        updateKeyword,
        updateRating,
        updateLanguage,
        removeFilters,
    } = useForm({ initialKeyword, initialRating, initialLanguage });

    const [_, pushLocation] = useLocation();


    const handleSubmit = (event) => {
        event.preventDefault();

        if(!keyword) return null;

        pushLocation(`/search/${keyword}/${rating}/${language}`);
    };

    const handleChange = (event) => {
        updateKeyword(event.target.value);
    };

    const handleChangeRating = (event) => {
        updateRating(event.target.value);
    }

    const handleChangeLanguage = (event) => {
        updateLanguage(event.target.value);
    }

    const handleRemove = () => {
        removeFilters();
    }


    return (
        <form onSubmit={handleSubmit} className="form-search">
            <div className="search">
                <input type="submit" value="Buscar" className="btn" />
                <input
                    type="search"
                    value={keyword}
                    onChange={handleChange}
                    placeholder="Search a gif here..."
                    className="search-input"
                />
            </div>

            <div className="filters">
                <select onChange={handleChangeRating} value={rating} aria-label="Rating select" title="Rating" className="filter">
                    <option value='' disabled>Rating type</option>
                    {RATINGS.map((rating) => (
                        <option key={rating}>{rating}</option>
                    ))}
                </select>

                <select onChange={handleChangeLanguage} value={language} aria-label="Language select" title="Language" className="filter" >
                    <option value='' disabled>Language</option>
                    {LANGUAGES.map(language => (
                        <option key={language}>{language}</option>
                    ))}
                </select>

                <button onClick={handleRemove} className="removeBtn" aria-label="Remove Filters" title="Remove filters ">X</button>
            </div>

            {/* <small>{times}</small> */}
        </form>
    );
}


export default React.memo(SearchForm);