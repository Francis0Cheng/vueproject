import Vue from 'vue'
import app from './App.vue'

//1.1导入并安装 
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

import { Header, Swipe, SwipeItem, Button} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


import './lib/mui/css/mui.css'
import './lib/mui/css/mui-extra.css'

//定义全局过滤器

//导入时间插件
import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern= "YYYY-MM-DD:mm:ss"){
    return moment(dataStr).format(pattern)
})
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
    router,
    //
    
})