// 入口文件
import Vue from 'vue'

import app from './App.vue'

//引入mintUI
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//引入mui
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
  })