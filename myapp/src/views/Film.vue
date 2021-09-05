<template>
  <div>
   <film-swiper>
   <!--  <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">
       <img :src="item" alt="">
     </div> -->

   </film-swiper>
   <!-- 轮播图组件 -->
    <film-header style="position: sticky;top: 0; background-color: #fff;" ></film-header>

    <router-view/>

  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FilmSwiper'
export default {

  data () {
    return {
      // imgList:["https://pic.maizuo.com/usr/movie/5be64dca3fac27effc5a8bb663764f28.jpg",""]
    }
  },
  components:
    {
      filmHeader,
      filmSwiper
    }

}
</script>

<style>
</style>
