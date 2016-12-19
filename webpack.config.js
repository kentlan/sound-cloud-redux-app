/*eslint object-shorthand: off*/
/*eslint func-names: off*/
/*eslint-env node*/
/*eslint no-process-env: off*/
require('webpack')

const config = {
  entry: './app',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 3000,
    contentBase: './app'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: `${__dirname}/app`,
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: [
          ['transform-runtime', {
            'helpers': false,
            'polyfill': false,
            'regenerator': true,
            'moduleName': 'babel-runtime'
          }]
        ],
        env: {
          development: {
            presets: ['react-hmre']
          }
        }
      }
    },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }]
  }
}

module.exports = config
