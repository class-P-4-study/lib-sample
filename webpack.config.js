const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    // library: {
    //     type: 'module',
    // },
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
              ['@babel/preset-env', { targets: "defaults" }] // .babelrc に設定
            ]
          }
        }
      },
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
      // { test: /\.json$/, type: 'json' },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // experiments: {
  //   outputModule: true,
  // },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    hot: true,
    open: true
	}
};