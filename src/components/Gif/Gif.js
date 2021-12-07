import React from 'react';
import { Link } from 'wouter';

import './Gif.css';

const Gif = ({ title, id, url }) => {
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="Gif-link">
                <h4>{title}</h4>
                <img src={url} alt={title} loading="lazy" />
            </Link>
        </div>
    );
}

export default React.memo(Gif, (prevPros, nextProps) => {
    return prevPros.id === nextProps.id;
});