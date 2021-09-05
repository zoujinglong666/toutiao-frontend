<template>
  <!-- <v-touch @swiperight="onSwipeRight"> -->
  <div v-if="filminfo">
<!-- 操作DOM使用vue指令 -->
    <detail-header v-top :title="filminfo.name">
    </detail-header>
	<!-- 上面第一个图片 -->
    <div :style="{backgroundImage:' url('+filminfo.poster+')'}"
      style="height: 210px; width: 100%; background-size: cover; background-position: center;">
    </div>

	<!-- 上面第一个图片 -->

    <div class="info">
      <span style="font-size: 16px;">{{filminfo.name}}</span>
      <span class="filmType">{{filminfo.filmType.name}}</span>
      <div>{{filminfo.category}}</div>
      <div>{{filminfo.premiereAt| dataFilter}}上映</div>
      <div>{{filminfo.nation}}|{{filminfo.runtime}}分钟</div>
      <p class="synopsis">{{filminfo.synopsis}}</p>

    </div>
    <van-cell title="演职人员" style="font-size: 14px;" />
    <detial-swiper :perslide="4" swiperclass="swiper-actors">
      <div class="swiper-slide" v-for="(item,index) in filminfo.actors" :key="index">
        <img :src="item.avatarAddress" alt="">
        <div style="text-align: center;">
          <p class="name">{{item.name}}</p>
          <p  class="van-ellipsis">{{item.role}}</p>
        </div>

      </div>
    </detial-swiper>
    <van-divider />
    <van-cell title="剧照" is-link value="全部(5)" />
    <detial-swiper :perslide="2" swiperclass="swiper-photos">
      <div class="swiper-slide" v-for="(item,index) in filminfo.photos" :key="index">
        <div :style="{backgroundImage:'url('+item+')'}"
          style="height: 100px; width: 100%;background-size: cover; background-position: center;"
          @click="handlePreview(index)"></div>
      </div>
    </detial-swiper>
  </div>
  <!-- <vueToTop></vueToTop> -->
  <!-- </v-touch> -->
</template>

<script>
  // import vueToTop from 'vue-totop'
  import Vue from 'vue'
  import moment from 'moment'
  import detialSwiper from './detial/DetialSwiper'
  import detailHeader from './detial/DetailHeader'
  import VueTouch from 'vue-touch'
  Vue.use(VueTouch, {name: 'v-touch'})
  // Vue.use(vueToTop)
  import {
    ImagePreview,
    Toast
  } from 'vant' // 日期格式化

  import http from '../util/http'
  //使用指令操作DOM
  Vue.directive('top', {
    inserted(e) {
      e.style.display = 'none'
      window.onscroll = () => {
        if ((document.body.scrollTop || document.documentElement.scrollTop) > 100) {
          e.style.display = 'block'
        } else {
          e.style.display = 'none'
        }
      }
    },
    onbind() {
      window.onscroll = 'null'
    }
  })
  Vue.filter('dataFilter', (data) => {
    return moment(data * 1000).format('YYYY-MM-DD')
  })
  export default {
    data() {
      return {
        filminfo: null

      }
    },
    components: {
      detialSwiper,
      detailHeader
    },
    methods: {
      handlePreview(index) {
        ImagePreview({
          images: this.filminfo.photos,
          startPosition: index,
          closeable: true

        })
      },
      onSwipeRight(){
        console.log("到首页了")
        this.$router.back()
      }
    },
    mounted() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        overlay: true

      })
      http({
        url: `/gateway?filmId=${this.$route.params.myid}&k=3838130`,
        headers: {
          'X-Host': 'mall.film-ticket.film.info'
        }
      }).then(res => {
        // console.log(res.data.data.film)
        this.filminfo = res.data.data.film
        console.log('利用获取的id,ajax请求后端接口', this.$route.params.myid)
        Toast.clear()
      })
    }
  }
</script>

<style lang="scss" scoped="scoped">
  img {
    width: 100%;
  }

  .name {
    font-size: 12px;
  }

  .van-ellipsis {
    font-size: 10px;
    color: #999;
  }

  .synopsis {
    font-size: 12px;
    color: #999;
    margin-top: 16px;
  }

  .filmType {
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    margin-left: 10px;

  }
  .info,h3 {

    padding:10px;
  }

</style>
