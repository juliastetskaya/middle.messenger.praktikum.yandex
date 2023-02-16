const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
        core: path.resolve(__dirname, "./src/core"),
        utils: path.resolve(__dirname, "./src/utils"),
        components: path.resolve(__dirname, "./src/components"),
        static: path.resolve(__dirname, "./src/static"),
        data: path.resolve(__dirname, "./src/data"),
        services: path.resolve(__dirname, "./src/services"),
        blocks: path.resolve(__dirname, "./src/blocks"),
        HOC: path.resolve(__dirname, "./src/HOC"),
        API: path.resolve(__dirname, "./src/API"),
        handlebars: "handlebars/dist/handlebars.min.js",
      }
  },
  devServer: {
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(?:png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        },
      {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    })
  ],
};
