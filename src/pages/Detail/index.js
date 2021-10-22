import React from 'react';
import Gif from '../../components/Gif';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export default function Detail({ params }) {
    const gifs = useGlobalGifs();

    const gif = gifs.find(gif =>
        gif.id === params.id
    );

    return <Gif {...gif} />;
}