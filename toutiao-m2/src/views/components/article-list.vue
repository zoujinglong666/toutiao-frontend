<template>
  <div class="article-list">

    <van-pull-refresh
    v-model="isRefreshLoading"
     @refresh="onRefresh"
      success-text="刷新成功"
     >
     <van-list
       v-model="loading"
       :finished="finished"
       finished-text="没有更多了"
       @load="onLoad"
     >
         <van-cell v-for="(item,index) in newsList"
          :key="index"
          :title="item.title"
          />
     </van-list>

    </van-pull-refresh>

  </div>

</template>

<script>
  import {getNews} from '../../api/news'
  import Vue from 'vue'
  import { Toast } from 'vant';
  Vue.use(Toast);
  export default{
    props:{
      channel:{
        type:Object,
        required:true
      }
    },
    data(){
      return{
        newsList: [],//数据列表
        loading: false,
        finished: false,
        timestamp:null,
        isRefreshLoading:false

      }
    },


   methods: {
       async onLoad() {
        const {data} = await getNews({
            channel_id:this.channel.id,
            timestamp:this.timestamp||Date.now(),
            with_top:1


        })
        console.log(data)
        const {results}=data.data
        this.newsList.push(...results)
        this.loading=false//这样才会加载下一页的页面
        if(results.length!==0){
          //更新获取下一页数据的页码
          this.timestamp=data.data.pre_timestamp

        }else{
          this.finished=true
        }
       },
       async onRefresh(){
         // 1.下拉刷新的时候重新请求数据

         const {data} = await getNews({
             channel_id:this.channel.id,
             timestamp:Date.now(),//下拉刷新的时候请求最近的数据，也就是当前时间戳
             with_top:1
         })
         // 2.把请求最新的数据放到数据列表中(往顶部最加)
         this.newsList.unshift(...data.data.results)
         // 3.关闭刷新的状态的loading
         this.isRefreshLoading=false
         // this.$toast('更新了10条新数据')


       }

     }

  }


</script>

<style scoped lang="less">
  .article-list{
    position: fixed;
    left: 0;//左右撑开
    right: 0;
    top: 90px;
    bottom: 50px;
    overflow-y: auto;

  }
</style>
