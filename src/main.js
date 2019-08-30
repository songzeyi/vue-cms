//入口文件
import Vue from 'vue'

//导入mui
import './lib/mui/css/mui.min.css'

//按需导入mint-ui
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

//导入APP组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(app)
})














