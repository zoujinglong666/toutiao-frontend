<template>
  <div>
    <van-index-bar>
      <van-search
      v-model="keyword"
      show-action
      placeholder="请输入搜索关键词"
      @cancel="onCancel"
      class="fixed"
      />

    <!--  <div class="positioncity">
        <p>GPS定位你所在得城市</p>
        <div v-if="city">
          {{city}}
        </div>
        <div v-else
        class="locate-failure"
        >
          定位失败
        </div>
      </div> -->
      <p>热门城市</p>
        <div v-for="item in hotcityList"
         :key="item.name"
         class="hotCity-layout">
            <div
            v-if="item.isHot === 1"
            @click="handleChangePage(item.name,item.cityId)"
            class="hotCity">
              {{item.name}}
            </div>
        </div>
      <div v-for="item in cityList" :key="item.type">
        <van-index-anchor :index="item.type" style="background-color: #F7F8FA;" />
        <van-cell
        :title="item.name"
        v-for="(item,index) in item.list"
        :key="index"
        @click="handleChangePage(item.name,item.cityId)" />
      </div>

    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { createApp } from 'vue';
import { Col, Row } from 'vant';
import http from '../util/http'
import Fuse from 'fuse.js'
import { Toast } from 'vant'
Vue.use(Col);
Vue.use(Row);
export default {
  data () {
    return {
      cityList: [],
      hotcityList:[],
      searchList:[],
      keyword:''

    }
  },
  mounted () {
    http({
      url: '/gateway?k=6678502',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      // console.log(res.data.data.cities)
      this.hotcityList=res.data.data.cities
      this.cityList = this.handleCityData(res.data.data.cities)
      // this.hotcityList = this.handlehotCityData(res.data.data.cities)
    })
  },
  methods: {
    onSearch (keyword) {
      // if (this.timer) {
      //   clearTimeout(this.timer);
      // }
      // 无数据时，清空list
      if(!this.keyword){
        return this.searchlist = []
      }
       setTimeout(() => {
        const reslut = [];
        this.cityList.forEach((element) => {
          if (
            element.pinyin.indexOf(this.keyword) > -1 ||
            element.name.indexOf(this.keyword) > -1
          ) {
            reslut.push(element);
          }
        });
        this.searchlist = reslut;
      }, 100)
    },
    //取消按钮
    onCancel () {
      this.$router.back()
    },

    // 把原有数据转化成我们想要的目标数据
    handleCityData (cities) {
      // console.log(cities)
      const letterArr = [] // 26个大写字母
      const newCities = []
      for (let code = 65; code < 91; code++) {
        // 这里显示A到Z的26个大写字母
        // console.log(String.fromCharCode(code))
        letterArr.push(String.fromCharCode(code))
      }
      // console.log(letterArr)
      letterArr.forEach((letter) => {
        const list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
        // 循环遍历每个数组
        // console.log(list)
        if (list.length > 0) {
          newCities.push({
            type: letter,
            list: list
          })
        }
      })
      // console.log(newCities)
      return newCities
    },

    handleChangePage(name,cityId){
      // this.$store.state.cityName=name
      this.$store.commit('changeCityName',name)
      this.$store.commit('changeCityId',cityId)
      this.$router.back()
    }
  }

}
</script>

<style lang="scss" scoped="scoped">
  .hotCity-layout{
    display: flex;

  }
  .hotCity{
    width: 99px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
    background-color:#F4F4F4;
  }
  .locate-failure{
    width: 99px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
    background-color:#F4F4F4;
  }
  p{
    padding: 10px;
    font-size: 14px;
    color: #999999;
  }


</style>
