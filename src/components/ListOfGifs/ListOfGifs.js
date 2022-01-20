import React from "react";
import Gif from "components/Gif/Gif";

import "./ListOfGifs.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="gifs-container">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
}
