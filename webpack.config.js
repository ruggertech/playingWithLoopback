const path          = require('path');
const webpackConfig = {
  entry:   './client/client.js',
  output:  {
    filename: 'bundle.js',
    path:     '/Users/user/Jive/private/erezPlayingWithLoopback/client'
  },
  module:  {
    loaders: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader:  'babel-loader',
        query:   {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    alias:      {
      'react': path.join(__dirname, '/node_modules/react')
    }
  }
};

module.exports = webpackConfig;
