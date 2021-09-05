<template>
  <div>
    <ul>
      <!-- 前台信息 -->
      <li v-for="(item,index) in ticketsList" :key="index">
        <p style="text-align: center; margin-top: 50px; font-size: 20px;padding-bottom: 5px;">{{item.name}}</p>
            <div class="services" @click="handleInfo">
              <li v-for="(data,index) in item.services " :key="index" >
            	{{data.name}}
            </li>
            <van-icon name="arrow"  color="#FFB232"/>
            </div>
            <!-- 地址信息 -->
            <div class="address">
              <van-icon name="location-o" /><span class="van-ellipsis">{{item.address}}</span>
              <van-icon name="phone-o" @click="handleTel(item.phone)"/>
            </div>
      </li>
    </ul>
    <!-- <van-cell  @click="showPopup"></van-cell> -->
    <van-popup v-model="show" position="top" :style="{ height: '100%' }"  closeable>
      <ul>
        <!-- 点击之后前台信息的详情 -->
        <li v-for="(item,index) in ticketsList" :key="index">
          <p style="text-align: center; margin-top: 50px; font-size: 20px;padding-bottom: 5px;">{{item.name}}</p>
              <!-- <div class="services" > -->
                <div v-for="(data,index) in item.services " :key="index"  class="info-services">
                  <div class="left">{{data.name}}</div>
                  <div class="right">{{data.description}}</div>
              </div>
              <!-- </div> -->
        </li>
      </ul>
    </van-popup>

    <!-- 轮播组件 -->
    
      <tickets-swiper>

      </tickets-swiper>

  </div>
</template>

<script>
  import ticketsSwiper from './Purchasetickets/TicketsSwiper'
  import Swiper from 'swiper/bundle'
  import SwiperCore, { Navigation, Pagination } from 'swiper/core'
  import 'swiper/swiper.scss'
  import http from '../util/http'
  export default {
    data() {
      return {
        ticketsList: null,
        isShow:true,
        show:false

      }
    },
    components:{
      ticketsSwiper

    },
    mounted() {

      http({
        url: `/gateway/?cinemaId=${this.$route.params.cinemaId}&k=4049246`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.info'
        }
      }).then(res => {
        console.log(res.data.data)
        console.log('利用获取的id,ajax请求后端接口', this.$route.params.cinemaId)
        this.ticketsList = res.data.data
      })
    },
    methods:{
      handleTel(phone){
        console.log(phone)
        window.location.href='tel://phone'
      },
      handleInfo(){
        // this.$router.push('/Info')
        this.show=true
      }
    }

  }
</script>

<style lang="scss" scoped>
  .services{
    display:flex;
    align-items: center;
    justify-content:center;
    padding: 0 0 10px 0;
    border-bottom: 1px solid rgba($color: #999999, $alpha: 0.15);
    li{
      color: #FFB232;
      font-size:10px;
      border: 1px solid #FFB232;
      margin: 0 3px;

    }

  }
  .address{
    margin-top: 20px;
	padding: 0 10px;
    display: flex;
    align-items: center;
    // justify-content: space-around;
    justify-content: space-between;
  }
  .info-services{
    padding: 10px 20px;
  }
  .left{
    position: relative;
    display: inline;
    float: left;
    height: 100%;
    text-align: center;
    padding: 0 6px;
    margin: 0 3px;
    font-size: 10px;
    color: #ffb232;
    border: 1px solid #ffb232;
  }
  .right{
    color: #999;
    font-size: 10px;
    padding-left: 70px;
  }

  



</style>
