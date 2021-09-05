<template>
  <div>
    <!-- 首页的城市切换按钮 -->
    <div class="city-btn" @click="handleCity()">
      <span style="color: #FFFFFF;">{{$store.state.cityName}}</span>
      <van-icon name="arrow-down" />
    </div>
    <!-- 首页的城市切换按钮 -->
    <van-list v-model="loading" :finished="finished" finished-text="------我是有底线的------" @load="onLoad" :immediate-check="false">
      <van-cell v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">
        <img :src="item.poster" alt="">
        <span class="filmName">{{item.name|titlesFilter}}</span>
        <span class="filmType">{{item.filmType.name}}</span>
        <p>观众评分<span class="grade">{{item.grade}}</span></p>
        <p>主演:{{item.actors|actorsFilter}}</p>
        <span>{{item.nation}}|</span>
        <span>{{item.runtime}}分钟</span>
        <!-- <div class="buy-ticket">购票</div> -->
      </van-cell>

    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import http from '../../util/http'
Vue.filter('actorsFilter', (actors) => {
  return actors.map(item => item.name).join(' ') // 用空格连接
}), // 演员过滤器


Vue.filter('titlesFilter',(name)=>{
  if (!name) return ''
  if (name.length >15) {
    return name.slice(0,10) + '...'
    //截取前面10位
  }
  return name
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1,
      total: 0
    }
  },
  methods: {
    onLoad () {
      if (this.datalist.length === this.total && this.datalist.length !== 0) {
        this.finished = true
        return
      }
      console.log(this.total)

      console.log('到底了')
      this.current++
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=1414048`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data.data.films)
        // this.datalist = res.data.data.films
        this.datalist = [...this.datalist, ...res.data.data.films]

        this.loading = false
      })
    },
    handleClick (id) {
      console.log(id)
      this.$router.push(`/detail/${id}`)

      // 1.编程式导航

      // 2.路由名字
      // this.$router.push({
      //   name: 'aaaDetail',
      //   params: {
      //     myid: item.filmId
      //   }
      // })

      // 3.query方式跳转详情
      // this.$router.push(`/detail?id=${id}`)
    },
    handleCity(){
      this.$router.push('/city')
    }

  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=1414048`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data.films)
      this.datalist = res.data.data.films
      this.total = res.data.data.total// 电影有多少条数据
    })
  }
}
</script>

<style lang="scss" scoped="scoped">
  van-list{
    overflow: hidden;
    padding: 10px;
    border-bottom: 1px solid rgba($color:#797d82, $alpha: 0.08);
  }

  .filmName {
    max-width: calc(100% - 25px);
    color: #191a1b;
    font-size: 16px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p,
  span {
    padding: 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 13px;
    margin-top: 4px;
    color: #797d82;
  }

  .filmType {
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
  }

  .grade {
    font-size: 14px;
    color: #FFB232;
  }

  img {
    float: left;
    width: 66px;
    height: 100px;
    margin-right: 10px;
    border-radius: 3px;

  }
  .city-btn{
   position: absolute;
   top: 18px;
   left: 7px;
   color: #fff;
   z-index: 10;
   font-size: 13px;
   background: rgba(0,0,0,.2);
   height: 30px;
   line-height: 30px;
   border-radius: 15px;
   text-align: center;
   padding: 0 5px;
  }


</style>
