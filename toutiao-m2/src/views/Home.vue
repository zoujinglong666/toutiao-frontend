<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      background="#3296fa"
      placeholder="请输入搜索关键词"
    >
    </van-search>
    <van-tabs v-model="active">
      <van-tab :title="channel.name" v-for="channel in ChannelsList" :key="channel.id">
        <!-- 文章列表组件 -->
        <article-list :channel="channel"/>
        <!-- 文章列表组件 -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {getUserChannels} from '../api/user'
import ArticleList from './components/article-list.vue'
export default{
	data(){
		return{
      value:'',
      active:'',
      ChannelsList:[]
		}
	},
  components:{
    ArticleList
  },
  created() {
    this.loadChannels()

  },

  methods:{
    async loadChannels(){
      const {data} = await getUserChannels()
      // console.log(data)
      this.ChannelsList=data.data.channels
    }
  }
}
</script>

<style>
</style>
