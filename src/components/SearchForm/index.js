import React, { useState } from "react"

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({keyword});
    }

    const handleInput = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" value={keyword} onChange={handleInput} placeholder="Search a gif here..." />
        </form>
    )
}

export default React.memo(SearchForm);