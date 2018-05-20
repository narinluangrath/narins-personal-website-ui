const HtmlWebPackPlugin = require( 'html-webpack-plugin' )

module.exports = {
  // webpack 4 does not require entry/output to be specified
  // assumes entry = src/index.js, output = dist/main.js
  module: {
    rules: [
      { // use babel-loader to transpile js/jsx files
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { // use html-loader to transpile html files
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html', // the html file to put js into (input)
      filename: './index.html' // the html file after js is added (output), saved in /dist
    })
  ]
}
