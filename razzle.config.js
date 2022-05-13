'use strict'

const path = require('path')

module.exports = {
  modifyPaths (opts) {
    const paths = opts.paths
    paths.appServerIndexJs = path.join(paths.appPath, 'razzle.js')
    return paths
  }
}
