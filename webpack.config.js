var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './resources/js/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'js'),
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('../css/app.css')
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
};