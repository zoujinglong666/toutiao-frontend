<template>

  <div class="swiper-container">
    <div class="swiper-wrapper" style="background: url(+item.poster+);">
      <div class="swiper-slide" v-for="item in imgList" :key="item.filmId">
        
          <img :src="item.poster" class="swiper-image" @click="handleBigimage">

      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Swiper from 'swiper/bundle'
  import 'swiper/swiper.scss'
  import SwiperCore, {
    Navigation,
    Pagination
  } from 'swiper/core'
  import http from '../../util/http.js'

  export default {

    data() {
      return {
        imgList: []

      }
    },
    mounted() {

      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=1414048`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data.data.films)
        this.imgList = res.data.data.films
        new Swiper('.swiper-container', {
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: true,
          paginationClickable: true,
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },


        })
      })

    },
    methods: {
      handleBigimage() {
        console.log("11111111111111111")
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: inline-block;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);

    img {
      float: right;
      width: 100px;
      height: 150px;
    }
  }

  div.swiper-slide {
    width: 100px;
    margin-right: 10px;
  }

</style>
