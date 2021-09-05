<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgList" :key="item.bannerId">
        <img :src="item.imgUrl">
      </van-swipe-item>

    </van-swipe>
    <div v-for="(discount,index) in discountList" :key="index" >
      <span class="address">{{discount.activeName}}</span>
    </div>
    <p>
      <span style="color: #FF5000;">￥</span><span class="big">42</span>
    </p>
    <div class="purchase">
      <div>
      购买数量：
    </div>
    <div>
      <van-stepper v-model="value" button-size="32" disable-input />
    </div>
    </div>


  </div>
</template>

<script>
  import http from '../util/http'
  export default {
    data() {
      return {
        imgList: [],
        discountList: null,
        value:''
      }
    },
   
    mounted() {
      http({
          url: '/gateway?type=2&cityId=310100&k=644053',
          headers: {
            'X-Host': 'mall.cfg.common-banner'
          }
        }).then(res => {
          this.imgList = res.data.data
        }),

        http({
          url: '/gateway?activeCode=LvEzsTL40p&k=8961572',
          headers: {
            'X-Host': 'mall.brand-act.info'
          }
        }).then(res => {
          console.log(res.data)
          this.discountList = res.data
        })
    }
  }

</script>

<style>
  img {
    display: flex;
    width: 100%;
  }
  .purchase{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .address{
    padding-bottom: 10px;
  }
  p{
    padding-left: 5px;
    margin-top: 10px;
  }
  .big{
    color:#FF5000;
    font-size: 32px;
    font-weight: 500;
  }



</style>
