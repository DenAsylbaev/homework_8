const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./src/server/server.js",
    output: {
    filename: "server.js",
    path: path.resolve(__dirname, 'dist/server'),
    publicPath: "/"
    },

    target: "node",
    node: {
        // Только для express приложений
        __dirname: false,
        __filename: false
    },
    // externals: [nodeExternals()], // Только для express приложений

    resolve: {
        fallback: {
            "fs": false,
            "path": false,
            "os": false,
            "net": false
        }
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),

        new NodePolyfillPlugin()
    ]
}
