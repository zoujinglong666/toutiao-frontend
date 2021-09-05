<template>

  <div>
    <van-nav-bar title="影院"
     left-text="返回"
     left-arrow
      style="color: #000000;"
      class="cinema-ceiling"
      @click-left="onClickLeft"
      @click-right="onClickRight">
      <template #left >
		  <!-- 获取影院的名字 -->
        {{$store.state.cityName}}<van-icon name="arrow-down"  color="black"/>
        <!-- 获取影院的名字 -->
      </template>
      <template #right>
        <van-icon name="search" size="18" color="black" />
      </template>
    </van-nav-bar>

    <div class="cinema" >
      <van-list v-for="(item,index) in ($store.state.cinemaList)" :key="index" >
        <van-cell @click="handleShop(item.cinemaId)">
         <div class="cinema-header">
			 <!-- 地址信息 -->
			 <div class="address-info">
			   <div style="font-size: 14px;" class="van-ellipsis">
			   {{item.name}}
			   </div>
			   <div class="address" style="font-size: 12px;">
			   {{item.address|addressFilter}}
         <!-- 数字长度过滤器-->
			   </div>
			 </div>
			 <!-- 地址信息 -->

			 <!-- 价格信息 -->
			 <div class="price-info">
			   <div>
			     <span style="font-size: 14px; color: #FF5F16;">￥{{item.lowPrice/100}}</span>
			     <span style="font-size: 8px; color: #FF5F16;">起</span>
			   </div>
			   <div class="distance">
			     <span>距离未知</span>
			   </div>
			 </div>
			 <!-- 价格信息 -->
		 </div>

        </van-cell>

      </van-list>
    </div>

  </div>

</template>

<script>
// import http from '../util/http'
// import Better from 'better-scroll'

export default {
  data () {
    return {
      // cinemaList: []

    }
  },
  //数据过滤器,再需要过滤的数据后面加一个|,后面跟着过滤的名字addressFilter
  filters: {
      addressFilter (address) {
        if (!address) return ''
        if (address.length >20) {
          return address.slice(0,18) + '...'
          //截取前面18位
        }
        return address
      }
    },

  mounted () {
    if(this.$store.state.cinemaList.length===0){
      //就走vueX异步请求流程
      this.$store.dispatch('getCinemaList',this.$store.state.cityId)
    }else{
      console.log("缓存")
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/city')
      // 方法一
      // this.$store.state.cinemaList.length=''

      //方法二(推荐)
      this.$store.commit("clearCinemaList")

    },
    onClickRight(){
      this.$router.push('/search')
    },
    handleShop(id){

      this.$router.push(`/Purchasetickets/${id}`)

    }

  }
}
</script>

<style lang="scss" scoped>
  li{
    padding:5px;
    border-bottom: 1px solid rgba($color:#797d82, $alpha: 0.08);
  }
  .address{
    font-size: 12px;
    color: #797d82;
    margin-top: 4px;
    display: block;
    // max-width: 80%;
    overflow-x: hidden;
    overflow-y: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    // white-space: nowrap;
  }
  // .cinema-ceiling{
  //   position: fixed;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   height: 50px;

  // }
  .cinema{
    position: fixed;
    left: 0;
    right: 0;
    top: 50px;//分别离上下距离50px
    bottom:50px;
    overflow-y: auto;//如果溢出,提供滚动机制，也就是显示滚动条
    overflow-x: visible;//不裁剪内容，可能会显示内容框外


  }
  .cinema-header{
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
  }
  .distance{
    span{
      font-size: 8px;
      color:#999
    }
  }
  .price-info{
    display: flex;
    flex-direction:column;
    align-items: center;
  }

</style>
