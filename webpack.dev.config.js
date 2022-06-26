const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/public/js/main.js",
    output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist/public'),
    publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader']
            // },
            // {
            //     test: /\.(png|jpg|svg|gif)$/,
            //     use: ['url-loader']
            // },
        ]
    },

    plugins: [
        new HtmlWebpackPlagin({
            template: 'src/public/index.html',
            filename: 'index.html',
            excludeChunks: ['server']
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'css/style.css',
        //     chunkFilename: '[id].css'
        // })
    ]
}
