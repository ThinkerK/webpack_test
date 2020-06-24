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
	// 开发环境 source-map 控制台直接看到源码 方便 debug 
	devtool: 'cheap-module-eval-source-map',
	// 开发环境 服务
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
		// css 单独拎出 
		// new ExtractTextPlugin({
		// 	filename: `css/[name].[chunkhash:8].css`,
		// }),
		
		// html 自动更改引用路径
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
	]
}
