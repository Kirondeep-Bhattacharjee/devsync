const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "buffer": require.resolve("buffer/"),
    "stream": require.resolve("stream-browserify"),
    "crypto": require.resolve("crypto-browserify")
  };

  config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
      global: 'global'
    })
  ];

  return config;
};
