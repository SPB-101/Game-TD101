import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import { webpackClient } from "../webpack/webpack.client";

export const webpackClientConfig = (params: Configuration) => {
  return merge(webpackClient as Configuration, params);
};
