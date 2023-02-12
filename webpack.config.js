const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'main.js',
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 执行顺序从右到左，从下到上
          "style-loader", // 将js中css通过创建style标签添加到html文件中
          "css-loader", // 将css资源打包成commonjs的模块到js中
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader', // 将less资源打包成css资源
        ],
      },
    ],
  },
  plugins: [],
};
