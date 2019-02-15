<template>
    <div class='app-container'>
        
        <!--顶部Header区域-->
        <mt-header fixed title="fixed top"></mt-header>


        <!--中间路由 router-view区域-->
		<transition >
		<router-view></router-view>
		</transition>

        <!--底部Tabber区域-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
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
</style>
