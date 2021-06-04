import React from "react";
import { Helmet } from "react-helmet-async";

import { data } from "./seo";

export const Meta = () => {
  return (
    <Helmet>
      <title>{data.title}</title>

      <meta name="description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta property="og:site_name" content="Game TD101" />
      <meta name="title" content={data.title} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Helmet>
  );
};
