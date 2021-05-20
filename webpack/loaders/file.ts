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
        {
          loader: "@svgr/webpack",
          options: {
            babel: true,
            icon: true,
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
        {
          loader: "@svgr/webpack",
          options: {
            babel: true,
            icon: true,
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
