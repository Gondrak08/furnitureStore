module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native-svg': 'react-native-svg-web',
    },
  },
}