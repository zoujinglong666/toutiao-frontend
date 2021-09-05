<template>
  <div>
    <div class="personage">
      <img src="https://mall.s.maizuo.com/e915e2c990c30f8efa9e30bc75da41ee.jpg" alt="">
      <div style="color: #fff; font-size: 18px;" @click="handleLogin">立即登录</div>
    </div>
    <ul>
    	<li><van-icon name="coupon" color="#FFC82F" size="28"/>
      <div>电影订单</div>
      </li>
      <li><van-icon name="column" color="#CBDD6A" size="28"/>
      <div>商品订单</div>
      </li>
    </ul>
    <van-divider />
    <van-cell title="卖座券" is-link icon="coupon-o" />
    <van-cell title="组合红包" is-link icon="balance-o" />
    <van-cell title="余额" is-link icon="gold-coin-o" />
    <van-cell title="设置" is-link icon="setting-o" />

  </div>
</template>
<script>
  import http from '../util/http'
  export default {

    methods:{
      handleLogin(){
        console.log("11111")
        this.$router.push('/login')
      }
    }


  }
</script>

<style lang="scss" scoped>
  .personage {
    display: flex;
    // width: 100%;
    height: 200px;
    background-color: #FF7F26;
    text-align: center;
    margin-top: -44px;
    padding-left: 22px;
    padding-top: 64px;
    display: flex;
    align-items: center;
    color: #fff;

  }

  img {
    box-sizing:border-box;
    width: 64px;
    height: 64px;
    margin-right: 20px;
    border-radius: 64px;
    border: 2px solid #fff;
  }
  ul{
    padding-top: 10px;

    display: flex;
    li{
      flex: 1;
      text-align: center;
    }
    div{
      font-size: 14px;
      color: #999999;
    }

  }
</style>
