const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    'babel-absolute-cjs': './src/babel/absolute-cjs.js',
    'babel-absolute-esm': './src/babel/absolute-esm.js',
    'babel-relative-esm': './src/babel/relative-esm.js',
    'babel-relative-cjs': './src/babel/relative-cjs.js',
    'babel-auto': './src/babel-auto/babel-auto-file-one.js',
    'rollup-cjs': './src/rollup/cjs.js',
    'rollup-esm': './src/rollup/esm.js',
    'rollup-umd': './src/rollup/umd.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  plugins: [new BundleAnalyzerPlugin()]
}
