const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        filename: 'bandle.js',
        path: path.resolve(__dirname, './build')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
               test:  /\.jsx?$/,
               exclude: /node_module/,
               use: ['babel-loader'],
            }, 
            {
                test:  /\.css?$/i,
                use: ['style-loader', 
                'css-loader'
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}