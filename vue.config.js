// package.json The name of should be consistent with the main application
const { name } = require('./package.json')

module.exports = {
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'window',
      jsonpFunction: `webpackJsonp_${name}`,
    }
  },
  devServer: {
    port:  3003, // Vue in. Env_ APP_ Port = 7788, consistent with the configuration of the parent application
  }
}