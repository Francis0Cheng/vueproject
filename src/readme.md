##这是个项目 haha



##用传统方式把修改后的代码传到github
1. git add .
2. git commit -m "提交信息"
3. git push 




## 制作首页App组件
    1. 完成 Header 区域，使用的是Mint-UI组件
    2. 制作底部的 Tabbarr 区域，使用的是MUI组件
        + 在制作样式图标时，注意引入css扩展库与字体文件
    3. 要在中间区域放置一个 router-view

## 改造 Tabbar 为 router-link
## 设置路由高亮
## 点击 tabbar 中的路由链接，展示对应的路由组件
## 制作首页轮播图
## 加载首页轮播图数据
    1. 获取数据，使用 vue-resource
    2. 使用vue-resource的this.$http.get获取
    3. 获取到的数据，要保存到data身上
    4. 使用v-for循环渲染每个item项
## 改造 九宫格 样式
## 改造新闻资讯 路由链接
## 新闻资讯 页面 制作
    1. 绘制页面 ，使用mui中的media list
    2. 使用vue-resource请求数据
    3. 渲染真实数据
## 实现 新闻资讯列表 点击跳转到新闻详情
    1. 把列表的每一项改造为 router-link
    2. 创建新闻详情的组件页面 NewsInfo.vue
    3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来
## 实现新闻详情 的 页面布局 和 数据渲染
## 单独封装一个 comment.vue的评论子组件
    1. 先创建一个 单独 的 comment.vue 组件模板
    2. 在需要使用comment组件的页面中，先手动导入comment组件
     + `import comment from './comment.vue'`
    3. 在父组件中，使用`components`属性，将刚才导入comment组件，注册侧为自己的子组件
    4. 将注册子组件的时候，注册名称，以标签形式，在页面 引用即可
## 获取所有的评论数据到组件中
## 实现点击加载更多评论的功能
    1. 绑定时间
    2. 点击加载更多，让pageIndex加1，然后重新获取评论信息
## 发表评论
    1. 把文本做双向数据绑定
    2. 为发表按钮设置一个按钮事件
    3. 校验评论内容
    4. 校验成功发送请求
    5. 发表成功后，刷新列表
    