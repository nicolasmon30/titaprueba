const path = require('path'), // for routes
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    autoprefixer = require('autoprefixer'),
    postcssCustomProperties = require('postcss-custom-properties'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = { 
    
    entry: './sources/js/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js/'),
        filename: 'bundle.js'
    },
    //devtool: 'source-map',
    optimization:{
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },
    module: { // for loaders
        rules: [
            { 
                test: /\.(js)$/, // all js files
                exclude: /node_modules/, // than excludes
                loader: "babel-loader" // name loader
            },
            {
                test: /\.(css|scss)$/, // CSS or SASS files
                use: [
                    'style-loader',
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions:{
                                autoprefixer: {
                                    browser: [ 'last 2 versions' ]
                                },
                                soruceMarp: true,
                                plugins: () => [ autoprefixer, postcssCustomProperties ],
                                minimize: true
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: '../css/bundle.css'
        }),
        new BrowserSyncPlugin({
            files:[
                'public/*.html'
            ],
            host: 'localhost',
            port: 8080,
            server: { baseDir: ['public'] }
        })
    ]
}