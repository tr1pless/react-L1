const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        filename: 'bandle.js',
        path: path.resolve(__dirname, './build')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    devServer: {
        compress: true,
        port: 8000,
        client: {
            logging: 'info',
        },
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
               test:  /\.(j|t)sx?$/,
               exclude: /node_module/,
               use: ['babel-loader'],
            }, 
            {
                test:  /\.s?css?$/i,
                exclude: /\.module\.s?css$/i,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'icss',
                                localIdentName: '[name]__[hash:base64:5]',
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test:  /\.module\.s?css$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 3,
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[hash:base64:5]',
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}