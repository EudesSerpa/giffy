import React from "react";
import { useLocation } from "wouter";

import useForm from "./useForm";

const RATINGS = [
  { rating: "g", level: 1, public: "Suitable for all ages" },
  { rating: "pg", level: 2, public: "Parental guidance" },
  {
    rating: "pg-13",
    level: 3,
    public: "Parental guidance: Suitable for 13 years and older",
  },
  { rating: "r", level: 4, public: "Suitable for 18 years and older" },
];
const LANGUAGES = ["en", "es", "ja"];

function SearchForm({
  initialKeyword = "",
  initialRating = RATINGS[0].rating,
  initialLanguage = LANGUAGES[0],
}) {
  const {
    keyword,
    language,
    rating,
    setKeyword,
    setRating,
    setLanguage,
    removeFilters,
  } = useForm({ initialKeyword, initialRating, initialLanguage });

  const [, pushLocation] = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!keyword) return null;

    pushLocation(`/search/${keyword}/${rating}/${language}`);
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const handleRemove = () => {
    removeFilters();
  };

  return (
    <form onSubmit={handleSubmit} className="form-search">
      <div className="search">
        <input type="submit" value="Search" className="btn" />
        <input
          type="search"
          value={keyword}
          onChange={handleChange}
          placeholder="Search a gif here..."
          className="search-input"
        />
      </div>

      <div className="filters">
        <select
          onChange={handleChangeRating}
          value={rating}
          aria-label="Rating select"
          title="Ratings"
          className="filter"
        >
          <option value="" disabled>
            Rating type
          </option>
          {RATINGS.map((category) => (
            <option key={category.rating} title={category.public}>
              {category.rating}
            </option>
          ))}
        </select>

        <select
          onChange={handleChangeLanguage}
          value={language}
          aria-label="Language select"
          title="Languages"
          className="filter"
        >
          <option value="" disabled>
            Language
          </option>
          {LANGUAGES.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>

        <button
          onClick={handleRemove}
          className="btnRemoveFilters"
          aria-label="Remove Filters"
          title="Remove filters "
        >
          X
        </button>
      </div>
    </form>
  );
}

export default React.memo(SearchForm);
