const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.hbs/, loader: "handlebars-loader"
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'index.html'),
      template: './src/template/index.hbs',
      minify: {}
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'videos.html'),
      template: './src/template/videos.hbs',
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'blog.html'),
      template: './src/template/blog.hbs',
    })
  ]
};
