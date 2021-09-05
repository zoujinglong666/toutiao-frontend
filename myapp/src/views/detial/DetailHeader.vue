<template>
  <div>
	  <!-- 吸顶 -->
    <van-nav-bar
      :title="title"
      left-arrow
      style="color: #000000;"
      @click-left="onClickLeft"
    >
    <template #left>
      <van-icon name="arrow-left" color="#000" size="18"/>
    </template>
    </van-nav-bar>

  </div>
</template>

<script>
export default {
	//父组件把值传给子组件,用props来接受
  props: ['title'],
  methods:{
    onClickLeft(){
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
 div{
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   height: 50px;
   line-height: 50px;
   text-align: center;
   background-color: #fff;
   z-index:2;

 }

</style>
