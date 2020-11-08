const path = require("path");

module.exports = {
  lintOnSave: false,

  css: {
    requireModuleExtension: false
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
