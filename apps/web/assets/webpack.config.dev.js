const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

const publicPath = 'http://localhost:3500/assets/'

module.exports = {
  mode: 'development',
  entry: [
    './javascripts/main.js'
  ],
  output: {
    path: path.resolve(__dirname, '../../../public/assets'),
    publicPath: publicPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 3500,
    overlay: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
