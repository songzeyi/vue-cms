<template>
    <div class="newsinfo-container">
        <h3 class="tit">{{ newsinfo.tit }}</h3>
        <p class="subtit">
            <span>发布时间：{{ newsinfo.add_time | dateFormat }}</span>
            <span>点击：{{ newsinfo.click }}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 评论子组件 -->
        <!-- 需要父子组件传递id -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
//1 导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.axios.get('/api/getnewsinfo/'+ this.id).then(res=>{
                if(res.data.status === 0){
                    // console.log(res.data.message[0])
                    this.newsinfo = res.data.message[0]
                }else {
                    Toast('获取新闻失败')
                }
            })
        }
    },
    components:{
        //注册子组件
        "comment-box":comment
    }
}
</script>
<style lang="scss" scoped>
    .newsinfo-container {
        padding:0px 4px;
        .tit {
            font-size:16px;
            text-align:center;
            margin:15px 0px;
            color:red;
        }
        .subtit {
            font-size:13px;
            color:#226aff;
            display:flex;
            justify-content:space-between;
        }
        .content {}
    }
</style>
