const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
