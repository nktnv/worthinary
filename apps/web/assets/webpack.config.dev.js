const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

const publicPath = 'http://localhost:3500/assets/'

const StyleLoaderConfig = function (mainLoaders, fallbackLoader) {
  let loader
  loader = [fallbackLoader].concat(mainLoaders)
  return loader
}

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
        test: /\.css$/,
        use: StyleLoaderConfig(['css-loader'], 'vue-style-loader')
      },
      {
        test: /\.scss$/,
        use: StyleLoaderConfig(['css-loader', 'sass-loader'], 'vue-style-loader')
      },
      {
        test: /\.sass$/,
        use: StyleLoaderConfig(['css-loader', 'sass-loader?indentedSyntax'], 'vue-style-loader')
      },
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
