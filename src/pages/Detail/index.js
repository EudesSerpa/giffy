import React from "react";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

import Gif from "components/Gif/Gif";
import Spinner from "components/Spinner";

import useSingleGif from "hooks/useSingleGif";

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
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

      <section className="App-wrapper App-section">
        <h3 className="App-title">{gif.title}</h3>

        <Gif {...gif} />
      </section>
    </>
  );
}
