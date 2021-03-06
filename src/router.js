// 路由文件

import VueRouter from "vue-router"

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import PhotoList from  './components/photos/PhotoList.vue'
// 创建一个路由对象
let router = new VueRouter({
    routes:[
        {path: '/', redirect:'/home'},
        {path: '/home', component: HomeContainer },
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopcarContainer},
        {path: '/search', component: SearchContainer},
        {path: '/home/newslist', component: NewsList},
        {path: '/home/newsinfo/:id', component: Newsinfo},
        {path: '/home/photolist', component: PhotoList}
     
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮类， 默认的类叫做routerlink-active
})

export default router