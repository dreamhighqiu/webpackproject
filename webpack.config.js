var path = require('path')
var webpack = require('webpack')

module.exports = {
	context: path.resolve(__dirname,'./src'),
	entry: {
		app: './app.js'

	},
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename： 'bundle.js'
	},
	plugins:[
        // 每个成员代表一个插件
        new webpack.optimize.UglifyJsPlugin]
}