const common_config = require('./webpack.common')
const webpack_merge = require('webpack-merge')

module.exports = webpack_merge.merge(common_config, {
    mode: 'development'
})