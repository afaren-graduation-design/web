'use strict';

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToJQuery = path.resolve(node_modules, 'jquery/dist/jquery.min.js');
var pathToBootstarp = path.resolve(node_modules, 'bootstrap/dist/');

var config = {
  entry: {
    "group": './source/scripts/group.jsx',
    "deadline": './source/scripts/deadline.jsx',
    "style-guide": './source/scripts/style-guide.jsx',
    "404": "./source/scripts/404.js",
    "index": "./source/scripts/index.jsx",
    "logic-puzzle": "./source/scripts/logic-puzzle.jsx",
    "homework": "./source/scripts/homework.jsx",
    "register": "./source/scripts/register.jsx",
    "start": "./source/scripts/start.jsx",
    "user-center": './source/scripts/user-center.jsx',
    "dashboard": './source/scripts/dashboard.jsx',
    "password-retrieve": './source/scripts/password-retrieve.jsx',
    "password-reset": './source/scripts/password-reset.jsx',
    "homework-details": './source/scripts/homework-details.jsx',
    "paper-assignment": './source/scripts/paper-assignment.jsx',
    "admin": './source/scripts/admin.jsx',
    "qa-page": './source/scripts/qa-page.jsx',
    "index-2016-summer": './source/scripts/index-2016-summer.jsx',
    "vendors": ['jquery', 'bootstrap.css', 'font-awesome', 'react', 'react-dom', 'bootstrap.js']
  },
  output: {
    path: __dirname + '/public/assets/',
    filename: '[chunkhash:8].[name].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: path.join(node_modules, 'jquery/dist/jquery.min.js'),
        loader: 'expose?jQuery'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=10000&name=build/[name].[ext]'
      }
    ],
    noParse: [pathToJQuery, pathToBootstarp]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      React: 'react',
      ReactDom: 'react-dom',
      ReactDOM: 'react-dom'
    }),
    new ExtractTextPlugin("[chunkhash:8].[name].css"),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

  ],
  resolve: {
    alias: {
      'jquery': 'jquery/dist/jquery.min.js',
      'bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css',
      'font-awesome': 'font-awesome/css/font-awesome.min.css',
      'bootstrap.js': 'bootstrap/dist/js/bootstrap.min.js',
      'ie': 'component-ie'
    }
  }
};

function htmlwebpackPluginBuilder(fileName, deps) {
  return new HtmlwebpackPlugin({
    filename: fileName,
    minify: {collapseWhitespace: true},
    template: __dirname + '/source/' + fileName,
    inject: true,
    chunks: deps
  })
}

(function webpackByEnv() {
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    );
  } else {
    config.devtool = '#cheap-source-map';
  }
})();

config.plugins.push(htmlwebpackPluginBuilder('index.html', ['index.css', 'vendors', 'index']));
config.plugins.push(htmlwebpackPluginBuilder('index-00.html', ['index.css']));
config.plugins.push(htmlwebpackPluginBuilder('register.html', ['register.css', 'vendors', 'register']));
config.plugins.push(htmlwebpackPluginBuilder('user-center.html', ['user-center.css', 'vendors', 'user-center']));
config.plugins.push(htmlwebpackPluginBuilder('user-center.html', ['user-center.css', 'vendors', 'user-center']));
config.plugins.push(htmlwebpackPluginBuilder('start.html', ['start.css', 'vendors', 'start']));
config.plugins.push(htmlwebpackPluginBuilder('password-retrieve.html', ['password-retrieve.css', 'vendors', 'password-retrieve']));
config.plugins.push(htmlwebpackPluginBuilder('password-reset.html', ['password-reset.css', 'vendors', 'password-reset']));
config.plugins.push(htmlwebpackPluginBuilder('logic-puzzle.html', ['logic-puzzle.css', 'vendors', 'logic-puzzle']));
config.plugins.push(htmlwebpackPluginBuilder('homework-details.html', ['homework-details.css', 'vendors', 'homework-details']));
config.plugins.push(htmlwebpackPluginBuilder('homework.html', ['homework.css', 'vendors', 'homework']));
config.plugins.push(htmlwebpackPluginBuilder('dashboard.html', ['dashboard.css', 'vendors', 'dashboard']));
config.plugins.push(htmlwebpackPluginBuilder('404.html', ['404.css', 'vendors', '404']));
config.plugins.push(htmlwebpackPluginBuilder('deadline.html', ['deadline.css', 'vendors', 'deadline']));
config.plugins.push(htmlwebpackPluginBuilder('style-guide.html', ['style-guide.css', 'vendors', 'style-guide']));
config.plugins.push(htmlwebpackPluginBuilder('group.html', ['group.css', 'vendors', 'group']));
config.plugins.push(htmlwebpackPluginBuilder('qa-page.html', ['qa-page.css', 'vendors', 'qa-page']));
config.plugins.push(htmlwebpackPluginBuilder('paper-assignment.html', ['paper-assignment.css', 'vendors', 'paper-assignment']));
config.plugins.push(htmlwebpackPluginBuilder('admin.html', ['admin.css', 'vendors', 'admin']));
config.plugins.push(htmlwebpackPluginBuilder('403.html', ['vendors']));
config.plugins.push(htmlwebpackPluginBuilder('index-2016-summer.html', ['index-2016-summer.css', 'vendors', 'index-2016-summer']));


module.exports = config;
