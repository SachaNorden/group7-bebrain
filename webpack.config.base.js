const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const DEVELOPMENT_API_BASE_URL = 'https://api-bebrain.azurewebsites.net';
const PRODUCTION_API_BASE_URL = 'https://api-bebrain.azurewebsites.net';
const DEVELOPMENT_PATH_PREFIX = '/';
const PRODUCTION_PATH_PREFIX = '/group7-bebrain.github.io/';

const buildMode = process.argv[process.argv.indexOf('--mode') + 1];
const isProductionBuild = buildMode === 'production';
const API_BASE_URL = isProductionBuild ? PRODUCTION_API_BASE_URL : DEVELOPMENT_API_BASE_URL;
const PATH_PREFIX = isProductionBuild ? PRODUCTION_PATH_PREFIX : DEVELOPMENT_PATH_PREFIX;

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: PATH_PREFIX,
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 8080,
    host: 'localhost',
    allowedHosts: 'all',
    open: true, // open the default browser
    hot: true,
    historyApiFallback: true, // serve index.html instead of routes leading to no specific ressource
    proxy: {
      '/api': {
        target: 'https://api-bebrain.azurewebsites.net',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      // emits a separate file and exports the URLs => works for import in JS and url in CSS
      // default condition: a file with size less than 8kb will be treated as a inline
      // module type and resource module type otherwise
      {
        test: /\.(png|jpg|gif|svg|mp3|mpe?g)$/,
        type: 'asset/resource',
      },

      /* automatically chooses between exporting a data URI and emitting a separate file.
      {
        test: /\.(png|jpg|gif|svg|mp3|mpe?g)$/,
        type : 'asset',
      },  */

      // in html file, emits files in output directory
      // and replace the src with the final path (to deal with svg, img...)
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: PATH_PREFIX,
    }),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../'),
    }),
    /* For more advanced use cases, these two global variables determine
    which renderer is included in the Phaser build. If you only want to run
    your game with WebGL, then you’d set WEBGL_RENDERER to true,
    and CANVAS_RENDERER to false.
    This way, your final code bundle would be smaller because all the canvas rendering
    code would be left out. */
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
      'process.env.BUILD_MODE': JSON.stringify(buildMode),
      'process.env.API_BASE_URL': JSON.stringify(API_BASE_URL),
      'process.env.PATH_PREFIX': JSON.stringify(PATH_PREFIX),
    }),
    new ESLintPlugin(),
  ],
};
