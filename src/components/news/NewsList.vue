<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h2>{{ item.tit }}</h2>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time | dateFormat }}</span>
                            <span>点击：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!-- <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="http://img3.imgtn.bdimg.com/it/u=3583433020,118316633&fm=26&gp=0.jpg">
                    <div class="mui-media-body">
                        <h2>郭艾伦</h2>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019-09-08 10:10:10</span>
                            <span>点击：10次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="http://img3.imgtn.bdimg.com/it/u=3583433020,118316633&fm=26&gp=0.jpg">
                    <div class="mui-media-body">
                        <h2>郭艾伦</h2>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019-09-08 10:10:10</span>
                            <span>点击：10次</span>
                        </p>
                    </div>
                </a>
            </li> -->
        </ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            newslist:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            // console.log(1)
            this.axios.get('/api/getnewslist/').then((res)=>{
                // console.log(res.data)
                //成功
                if(res.data.status === 0){
                    this.newslist = res.data.message
                }else{
                    Toast('新闻资讯列表加载失败')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h2 {
                font-size:14px;
            }
            .mui-ellipsis {
                font-size:12px;
                color:#226aff;
                display:flex;
                justify-content:space-between;
            }
        }
    }
</style>
