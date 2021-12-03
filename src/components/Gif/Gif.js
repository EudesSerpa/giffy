import React from 'react';
import { Link } from 'wouter';

import './Gif.css';

const Gif = ({ title, id, url }) => {
    return (
        <Link to={`/gif/${id}`} className="Gif">
            <p>{title}</p>
            <img src={url} alt={title} loading="lazy" />
        </Link>
    );
}

export default React.memo(Gif, (prevPros, nextProps) => {
    return prevPros.id === nextProps.id;
});