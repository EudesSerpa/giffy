import React from 'react';
import { Link } from 'wouter';

import Fav from 'components/Favorite';

import './Gif.css';


const Gif = ({ title, id, url }) => {
    return (
        <div className="Gif">
            <div className="Gif-buttons">
                <Fav id={id} />
            </div>
            
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