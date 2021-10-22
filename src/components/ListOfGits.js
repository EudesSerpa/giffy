import React from 'react';
import Gif from './Gif';

export default function ListOfGits({ gifs }) {
    const gifList = gifs.map(({id, title, url}) =>
        <Gif
            key={id}
            id={id}
            title={title}
            url={url}
        />
    );

    return (
        <div className='gifs-container'>
            { gifList }
        </div>);
}