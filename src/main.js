import Vue from 'vue'
import app from './App.vue'

//1.1导入并安装 
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import { Header, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import './lib/mui/css/mui.css'
import './lib/mui/css/mui-extra.css'

//1.2导入自己的router.js模块
import router from './router.js'

var vm = new Vue({

    el: '#app',
    data: {

    },
    method:{
        
    },
    data:{

    },
    render: c=> c(app),
    //1.3挂载到VM实例上
    router
})