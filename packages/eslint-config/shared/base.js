/**
 * 向eslint规则中添加自定义的全局变量供识别
 * readonly/false——只读
 * writable/true——可写
 * off——禁用该全局变量
 */
module.exports = {
  globals: {
    __DEV__: true,
    __PROD__: true
  }
}
