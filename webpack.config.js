

const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const compiler = require('vue-template-compiler')
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {

	mode:'development',
	entry:path.resolve(__dirname,'src','main.js'),
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	},
	devServer:{
		//  --open --port 3000 --contentBase src --hot
		open:true,
		port:3000,
		// contentBase:'src',
		hot:true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
					// HotModuleReplacementPlugin
		new htmlWebpackPlugin({
			template:path.resolve(__dirname,'src/index.html'),
			filename:'index.html'

		}),
		new VueLoaderPlugin()
	],
	module:{
		rules:[
			{ test:/\.css$/,use:['style-loader','css-loader'] },
			{ test:/\.less$/,use:['style-loader','css-loader','less-loader'] },
			{ test:/\.scss$/,use:['style-loader','css-loader','sass-loader'] },
			{ test:/\.(jpg|jpeg|gif|png|svg|webp)$/,use:['url-loader?limit=7876&name=[hash:8]-[name].[ext]'] },
			{ test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, 
			{ test:/\.js$/,exclude:/'node_modules'/,use:['babel-loader'] },
			{ test:/\.vue$/,use:['vue-loader'] }


		]
	},
	resolve: {
	    alias: { 
	      "vue$": "vue/dist/vue.js"
	    }
	 }

}












