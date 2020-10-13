const path = require('path');
const origin = 'src';
const destination = 'build';
const nodeExternals = require( 'webpack-node-externals');

module.exports = {
    mode: 'none',
    entry: {
      index:`./${origin}/js/index.js`,
      // script:`./${origin}/js/script.js`,
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
          }
        ]
    },
    target: 'node',
    externals: [nodeExternals()],
    
}

// npx webpack --config webpack.config.js
//https://webpack.js.org/guides/getting-started/
//https://michaelgunner.co.uk/posts/2018-01-29-babel-webpack-and-gulp-all-together-now/
//https://github.com/shama/webpack-stream
//https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join#:~:text=resolve()%20method%20resolves%20a,then%20normalizes%20the%20resulting%20path.
//npm install -D babel-loader @babel/core @babel/preset-env webpack