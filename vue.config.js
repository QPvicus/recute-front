/*
 * @Author: Taylor Swift
 * @Date: 2021-06-10 11:07:46
 * @LastEditTime: 2021-06-12 09:45:06
 * @Description:
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/style/global.scss')],
    },
  },
}
