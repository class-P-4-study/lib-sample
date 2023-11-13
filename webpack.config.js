const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // .babelrc に設定
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        // 拡張子.ts
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    hot: true,
    open: true
	}
};