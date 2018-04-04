module.exports = {
  module: {
    rules: [
      {
        test: /\.(pug|jade)$/,
        use: ['raw-loader', 'pug-html-loader']
      }
    ]
  }
}
