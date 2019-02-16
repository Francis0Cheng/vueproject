<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>
                发表时间：{{newsinfo.add_time| dateFormat }}
            </span>
            <span>
                点击次数：{{newsinfo.click}}
            </span>
        </p>
        <hr>
        <!-- 内容 -->
        <div class="content" v-html="newsinfo.content">

        </div>
        <!-- 评论 -->
        <comment-box :id="id">

        </comment-box>
    </div>
</template>

<script>

import comment from '../subcomponents/comment.vue'





import {Toast} from "mint-ui"
export default {
    data(){
        return {
            newsinfo: undefined,
            id: this.$route.params.id
            }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
        
            this.$http.get('api/getnew/'+ this.id).then(result=>{
                if(result.body.status ===0 )
                {   
              
                    console.log(result.body.message[0])
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast('获取新闻失败')
                }
            })
        }
    },
    components:{
        'comment-box': comment, 
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #22aff2;
        display: flex;
        justify-content: space-between; 
    }
    .content{
        img{
            width: 100%;
        }
    }
}

</style>
