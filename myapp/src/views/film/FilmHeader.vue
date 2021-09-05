<template>
  <div>
    <ul>
    	<router-link to="/film/nowplaying" tag="li" active-class="bbb">正在热映</router-link>
		<!-- 声明式导航 -->
      <router-link to="/film/comingsoon" tag="li" active-class="bbb">即将上映</router-link>
    </ul>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
 ul{
   display: flex;
   height: 40px;
   line-height: 50px;
   text-align: center;
   li{
     list-style: none;
     flex: 1;
   }
 }
 .bbb{
   color: red;
   border-bottom: 2px solid red;
 }

</style>
