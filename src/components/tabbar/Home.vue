<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
            <!-- <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/icon01.png" alt="">
                    <div class="mui-media-body">信息资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/icon02.png" alt="">
                    <div class="mui-media-body">商品购物</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/icon03.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/icon04.png" alt="">
                    <div class="mui-media-body">评论专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/icon05.png" alt="">
                    <div class="mui-media-body">视频播放</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/icon06.png" alt="">
                    <div class="mui-media-body">更多</div></a></li>
        </ul> 
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            lunboList:[]
        }
    },
    created(){
        this.getLunbo()
    },
    methods:{
        getLunbo(){
            this.axios.get('/api/getlunbo/').then((res)=>{
                // console.log(res.data)
                //成功
                if(res.data.status === 0){
                    this.lunboList = res.data.message
                }else{
                    Toast('加载轮播图失败')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe {
        height:198px;
        .mint-swipe-item {
            // &:nth-child(1){
            //     background:red;
            // }
            // &:nth-child(2){
            //     background:blue;
            // }
            // &:nth-child(3){
            //     background:green;
            // }
            img {
                width:100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9 {
        background-color:#fff;
        border:none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border:none;
        img {
            width:60px;
        }
        .mui-media-body {
            font-size:13px;
        }
    }
</style>



