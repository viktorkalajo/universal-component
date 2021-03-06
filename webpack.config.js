const path = require('path')

module.exports = {
  entry: './client/client.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'client.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
}
