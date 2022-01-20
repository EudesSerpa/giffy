import React from "react";

import Fav from "components/Favorite";
import { 
    Gifstyled,
    GifButtons,
    GifLink,
    GifTitle,
    GifImage } from "./styles.js";


const Gif = ({ title, id, url }) => {
  return (
    <Gifstyled>
      <GifButtons>
        <Fav id={id} />
      </GifButtons>

      <GifLink to={`/gif/${id}`}>
        <GifTitle>{title}</GifTitle>
        <GifImage src={url} alt={title} loading="lazy" />
      </GifLink>
    </Gifstyled>
  );
};


export default React.memo(Gif, (prevPros, nextProps) => {
  return prevPros.id === nextProps.id;
});
