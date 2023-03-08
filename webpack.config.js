const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
entry: './src/index.tsx', // entry point of our app
mode: 'development',
output: {
  path: path.resolve(__dirname, './build'),
  filename: 'bundle.js',
},
module: {
  rules: [
    {
      test: /\.jsx?/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: ['ts-loader'],
    },
    {
    test: /.(css)$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader']
    }
  ]
},
resolve: {
  // order matters, if you have a lot of ts tsx files put them to the left
  extensions: ['.ts', '.tsx','.jsx', '.js' ],
  // extensions: ['.jsx', '.js', '.tsx', '.ts'],
},
plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
  }),
  // new MiniCssExtractPlugin(),
],
devServer: {
  static: {
    directory: path.resolve(__dirname, './build'), // match the output path
    publicPath: '/', // match the output 'publicPath'
  },
  proxy: {
    /*
    proxy is required in order to make api calls to
    express server while using hot-reload webpack server
    routes api fetch requests from localhost:8080/api/* (webpack dev server)
    to localhost:3000/api/* (where our Express server is running)
   */
    '/api': 'https:localhost:3000',
  }
},
}
