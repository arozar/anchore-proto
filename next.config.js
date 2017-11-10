const webpack = require('webpack');
const env = require('./config/env');


module.exports = {
  webpack: (cfg) => {
    cfg.plugins.push(
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(env),
      })
    );

    return cfg;
  },
};