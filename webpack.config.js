const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	node: false,
	mode: 'production',
	target: 'web',
	context: path.resolve(__dirname, 'src'),
	optimization: {
		minimize: true,
		minimizer: [new UglifyJsPlugin({
			//uglifyOptions: { ecma: 7 },
			//sourceMap: true,
			include: /\.min\.js$/
		})]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].css" }), // { filename: "[name].[contentHash].css" }
	],
	entry: {
		'ractive-cloudformation-ui': path.resolve(__dirname, './src/index.ractive.html'),
		'ractive-cloudformation-ui.min': path.resolve(__dirname, './src/index.ractive.html')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: 'ractive-cloudformation-ui',

		// var, this, window, umd
		libraryTarget: 'umd',
		libraryExport: 'default',
		umdNamedDefine: true   // Important
	},
	externals: {
		ractive: {
			commonjs: 'ractive',
			commonjs2: 'ractive',
			amd: 'ractive',
			root: 'Ractive'
		}
	},
	module: {
		rules: [

			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader, // extract css into files
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'less-loader', // compiles Less to CSS
						// options: {
						//	paths: [path.resolve(__dirname, 'node_modules')],
						// 	strictMath: true,
						// 	noIeCompat: true,
						// },
					},
				],
			},



			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: 'babel-loader'
			},
			{
					test: /\.ractive\.html$/,
					use: 'babel-loader'
			},
			{
				test: /\.ractive\.html$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'ractive-bin-loader'
					}
				]
			}
		]
	}
}
