const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'bundle.[contentHash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new CleanWebPackPlugin()],
});
