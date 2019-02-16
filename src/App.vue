<template>
    <div class='app-container'>
        
        <!--顶部Header区域-->
        <mt-header fixed title="Vue Project"></mt-header>


        <!--中间路由 router-view区域-->
		<transition >
		<router-view></router-view>
		</transition>

        <!--底部Tabber区域-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    </div>
</template>

<script>

    
</script>

<style lang="scss" scoped>
.app-container{
	overflow-x: hidden;
    padding-top: 40px; /*解决动画时下边栏和上边栏消失问题*/
	padding-bottom: 50px;
}


/*将v-enter和v-leave-to分开*/
.v-enter{
	opacity: 0;
	transform: translateX(100%)
} 
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;  //解决内容上下移动的问题
}
.v-enter-active, .v-leave-active{
	transition: all 0.5s ease 
}

.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

