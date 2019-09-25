<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多吐槽120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                   {{ item.content === 'undefined' ? '此用户很懒，没有评论' : item.content }}
                </div>
            </div>
            <!-- <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间2019-09-24 16:07
                </div>
                <div class="cmt-body">
                    哈哈哈，S9小组
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间2019-09-24 16:07
                </div>
                <div class="cmt-body">
                    哈哈哈，S9小组
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间2019-09-24 16:07
                </div>
                <div class="cmt-body">
                    哈哈哈，S9小组
                </div>
            </div> -->
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            pageIndex:1,//默认展示第一页
            comments:[]
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){ //获取评论
            this.axios.get('/api/getcomments/'+ this.id +'?pageindex='+ this.pageIndex).then(res=>{
                if(res.data.status === 0){
                    // console.log(res.data.message)
                    // this.comments = res.data.message
                    // 每当获取新评论数据的时候不要把老数据清空覆盖而是以老数据拼接上新数据
                    this.comments = this.comments.concat(res.data.message)
                }else{
                    Toast('获取评论失败')
                }
            })
        },
        getMore(){ //加载更多
            this.pageIndex++
            this.getComments()
        }
    },
    props:['id']
}
</script>
<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size:18px;
        }
        textarea {
            font-size:14px;
            height:85px;
            margin:0;
        }
        .cmt-list {
            margin:5px 0px;
            .cmt-item {
                font-size:13px;
                .cmt-title {
                    line-height:30px;
                    background:#ccc;
                }
                .cmt-body {
                    line-height:35px;
                    text-indent:2em;//控制缩进 相对单位
                }
            }
        }
    }
</style>
