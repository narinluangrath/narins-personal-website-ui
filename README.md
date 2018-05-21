# Narin's Personal Website

A UI for professional web development portfolio.

## Under the hood

### `package.json`

```javascript
"scripts" : {
  "start": "webpack-dev-server --open --mode development", // transpile code and host using dev server 
  "dev": "webpack --mode development",                     // transpile code
  "build": "webpack --mode production"                     // transpile and mimify code
},
"devDependencies" : {
  "babel-core": "^6.26.3",         // the core transpiler code 
  "babel-loader": "^7.1.4",        // loads babel into webpack
  "babel-preset-env": "^1.7.0",    // converts ES6 -> ES5 (preset-es2015 is depricated)
  "babel-preset-react": "^6.24.1", // converts JSX and other react syntax to vanilla JS
  "html-loader": "^0.5.5",         // (not really sure) 
  "html-webpack-plugin": "^3.2.0", // (not really sure)
  "react": "^16.3.2",              // the core react code
  "react-dom": "^16.3.2",          // interface between react and the dom
  "webpack": "^4.8.3",             // the bundler which converts src/index.js -> dist/main.js
  "webpack-cli": "^2.1.3"          // allows you to compile from the command line
  "webpack-dev-server": "^3.1.4"   // dev server for local testing (uses Node.js Express under the hood)
}
```

### `.babelrc`

```javascript
{
  "presets": ["env", "react"]    // use the babel-preset-env and babel-preset-react modules
}
```

### `webpack.config.js`

```javascript
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
      filename: './index.html'      // the html file after js is added (output), saved in /dist
    })
  ]
}
```

## Acknoledgements

Built using Valentino Gagliardi's [quick start guide](https://www.valentinog.com/blog/react-webpack-babel/).  
It uses React, Webpack 4 and Babel.

