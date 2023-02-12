const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    // 所有文件的输出路径
    // __dirname nodejs的变量，代表当前文件的文件夹目录。
    path: path.resolve(__dirname, 'dist'),
    // 入口文件打包输出文件名
    filename: 'js/main.js',
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
      {
        test: /\.(png|jpe?g|gif|webp|svg|gif)$/, // 解析
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 小于10kb转base64
            // 优点：减少请求数量  缺点：文件体积变大
            maxSize: 10 * 1024,
          }
        },
        generator: {
          // 图片资源输出文件名
          // hash取前10位，文件名短一些
          // ext 文件类型
          // url ?后带的参数
          filename: 'static/images/[hash:10][ext][query]'
        },
      },
    ],
  },
  plugins: [],
};
