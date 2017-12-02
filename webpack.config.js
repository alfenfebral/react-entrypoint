// var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var package = require('./package.json');

module.exports = {
    devServer: {
        inline: true,
        // contentBase: './dist',
        port: 3000
    },
    entry: {
        app: "./src/scripts/app.js",
        // vendor: Object.keys(package.dependencies),
        settings: "./src/scripts/settings.js"
    }, 
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: "./dist/[name].bundle.js" 
    },
    watch:true,
    resolve: { extensions: [".js", ".ts"] },
    // plugins: debug ? [] : [
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            chunks: ['vendor', 'app'],
            filename: './dist/index.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Settings',
            template: './src/index.html',
            chunks: ['vendor', 'settings'],
            filename: './dist/settings.html',
        })
   ]

}