//入口文件
import Vue from 'vue'
//导入路由模块
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入自己的路由模块
import router from './router.js'

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//导入mui   
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入mint-ui
import { Header,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

//导入APP组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router //挂载router到VM实例上
})














