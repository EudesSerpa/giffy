import React from "react";
import Gif from "components/Gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        
        <Spinner />
      </>
    );
  }

  if (isError) return <Redirect to="/404" />;

  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{gif.title} || Giffy</title>
      </Helmet>

      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}
