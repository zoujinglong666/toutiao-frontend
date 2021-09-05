<template>
<nav>
  <ul>
  	<router-link to="/film" tag="li" active-class="aaa">
  	  <i class="toutiao toutiao-shouye">
      </i>
  	  <span>电影</span>
  	  </router-link>
      <router-link to="/cinema" tag="li" active-class="aaa">
        <i class="toutiao toutiao-shipin"></i>
        <span>影院</span>
        </router-link>
    <router-link to="/center" tag="li" active-class="aaa">
      <i class="toutiao toutiao-wode"></i>
      <span>我的</span>
      </router-link>
    <!-- tag是渲染外边的便签 -->
  </ul>
</nav>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">

  nav{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    text-align: center;
    background-color: #fff;
    z-index: 99;
    ul{
      list-style: none;
      display: flex;
      li{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      

      }
    }
  }

  .aaa{
   color: red;
  }
  span{
    font-size: 14px;
  }
  i{
    font-size: 18px;
  }
</style>
