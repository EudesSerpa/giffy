import React from 'react';
import ListOfGits from '../../components/ListOfGits';
import { useGifs } from '../../hooks/useGifs';


export default function SearchResults({ params }) {
    const { keyword } = params;

    const { gifs } = useGifs({ keyword });

    return <ListOfGits gifs={gifs} />;
}