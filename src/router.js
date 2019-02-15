// 路由文件

import VueRouter from "vue-router"

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
// 创建一个路由对象
let router = new VueRouter({
    routes:[
        {path: '/', redirect:'/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopcarContainer},
        {path: '/search', component: SearchContainer},
     
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮类， 默认的类叫做routerlink-active
})

export default router