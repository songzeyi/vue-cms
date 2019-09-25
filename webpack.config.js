

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
		hot:true,
		proxy: {
		"/api": {
			target: "http://site.dev",   // 要请求的后台地址
			ws: true,    // 启用websockets
			changeOrigin: true,    // 是否跨域
			pathRewrite: {   
			"^/api": ""          // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
			}
		}
		}
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












