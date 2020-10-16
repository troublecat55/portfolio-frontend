const path = require('path');
const origin = 'src';
const destination = 'build';
const nodeExternals = require( 'webpack-node-externals');
// const webpack = require("webpack");

module.exports = {
    mode: 'none',
    entry: {
      index:`./${origin}/js/index.js`,
      preworks:`./${origin}/js/preworks.js`,
    },
    output: { 
        path: path.resolve(__dirname , `./${destination}/js`),
        filename: '[name].js',
        // sourceMapFilename: '[name].[hash:8].map',
        // chunkFilename: '[id].[hash:8].js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
          },
          // {
          //   test:require.resolve('jquery'), 
          //   loader: 'expose-loader?$!expose-loader?jQuery',
          // }
        ]
    },
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //         $: "jquery",
  //         jQuery: "jquery"
  //     })
  //  ],
    target: 'node',
    externals: [nodeExternals()],
    
}

// npx webpack --config webpack.config.js
//https://webpack.js.org/guides/getting-started/
//https://michaelgunner.co.uk/posts/2018-01-29-babel-webpack-and-gulp-all-together-now/
//https://github.com/shama/webpack-stream
//https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join#:~:text=resolve()%20method%20resolves%20a,then%20normalizes%20the%20resulting%20path.
//npm install -D babel-loader @babel/core @babel/preset-env webpack