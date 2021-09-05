<template>
    <div>
    <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @cancel="onCancel"
    />
    <van-empty image="search" description="没事搜一搜" v-show="isShow" />

    <van-list v-for="(item,index) in (computedCinemaList)" :key="index">
      <van-cell>
        <div style="font-size: 16px;">{{item.name}}</div>
        <div class="address">{{item.address}}</div>
      </van-cell>
    </van-list>
    </div>
</template>

<script>
  import { Toast } from 'vant';

  export default {
    data() {
      return {
        value: '',
        isShow:false
      }
    },
    computed:{
      computedCinemaList(){
        if(this.value===''){
          return []
        }
        return this.$store.state.cinemaList.filter(item=>item.name.toUpperCase().includes(this.value.toUpperCase())||item.address.toUpperCase().includes(this.value.toUpperCase()))

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
    methods:{
       onCancel() {
         this.$router.back()
         //返回上一级页面

          }
          

    }



    }


</script>
<style lang="scss" scoped>
  li{
    padding:5px;
    // border-bottom: 1px solid rgba($color:red, $alpha: 0.9);
  }
  .address{
    font-size: 12px;
    color: #797d82;
    margin-top: 4px;
  }
  van-search{
    position: fixed;
    left:0 ;
    top: 0;
  }
</style>
