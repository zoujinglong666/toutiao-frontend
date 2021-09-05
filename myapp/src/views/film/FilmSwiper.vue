<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
         v-for="item in imgList"
          :key="item.bannerId"
          @click="handleSwiper(item.bannerId)"
          >
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>

  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper/bundle'
import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper/core'
import 'swiper/swiper.scss'
import http from '../../util/http'

export default {
  data () {
    return {
      imgList: []

    }
  },
  methods:{
    handleSwiper(bannerId){
      if(bannerId==363){
        console.log(item.bannerId)
        console.log("test")
        this.$router.push('/discount')
      }
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      loop: true,
     pagination: {
        el: '.swiper-pagination'
      }
    }),
    http({
      url:'/gateway?type=2&cityId=310100&k=644053',
      headers:{
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res=>{
      console.log(res.data.data)
      this.imgList=res.data.data;

    })
  }
}
</script>

<style lang="scss" scoped="scoped">
  .swiper-container {
    width: 100%;
    // height: 210px;

  }
  img{
    //一般移动端的图片高度不要显示，用flex布局自适应
    display: flex;
    // height: 210px;
    width: 100%;
  }
</style>
