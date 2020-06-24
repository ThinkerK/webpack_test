const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: 'js/[name].[chunkhash:16].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},{
				test: /\.(css|scss)$/,
				use: [{
						loader: "style-loader",
					},{
						loader: "css-loader",
						options: {
							sourceMap: true
						},
					},{
						loader: "sass-loader",
						options: {
							sourceMap: true
						},
					}],
			},
			
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer:{
		port: 8080,
		publicPath: '/',
		historyApiFallback: {
		  rewrites: [
		    { from: /.*/, to: 'index.html' },
		  ],
		},
	},
	plugins: [
		// new ExtractTextPlugin({
		// 	filename: `css/[name].[chunkhash:8].css`,
		// }),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
	]
}