module.exports = {
  entry: './src/js/app.js',
  output: {
    path: `${__dirname}/build/js`,
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};
