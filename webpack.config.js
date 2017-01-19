var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}` });

module.exports = {
    name: 'server',
    target: 'node',
    entry: './src/main.js',
    context: __dirname,
    node: {
        __filename: true,
        __dirname: true
    },
    output: {
        path: `${__dirname}/public/`,
        publicPath: 'public/',
        filename: 'server.js'
    },
    externals: nodeModules,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-1']
                },
                excldue: /node_modules/,
            }
        ]
    }
};