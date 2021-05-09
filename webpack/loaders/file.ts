export const fileLoader = {
  client: [
    {
      test: /\.(?:ico|gif|png|jpg|jpeg)/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/images",
        },
      },
    },
    {
      test: /\.svg$/,
      use: [
        "babel-loader",
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            typescript: true,
            babel: false,
            ext: "tsx",
            prettier: true,
          },
        },
      ],
    },
    {
      test: /\.(?:wav)/,
      type: "asset/resource",
      generator: {
        filename: "assets/sounds/[name][ext]",
      },
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf)$/,
      type: "asset/inline",
    },
  ],
  server: [
    {
      test: /\.(?:ico|gif|png|jpg|jpeg)/,
      use: "null-loader",
    },
    {
      test: /\.svg$/,
      use: [
        "babel-loader",
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            typescript: true,
            babel: false,
            ext: "tsx",
            prettier: true,
          },
        },
      ],
    },
    {
      test: /\.(?:wav)/,
      use: "null-loader",
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf)$/,
      type: "asset/inline",
    },
  ],
};
