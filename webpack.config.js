module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'www/js/index.js'
  },
  module: {
  rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',

      }
    }
  ]
}
};