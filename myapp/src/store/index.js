import Vue from 'vue'
import Vuex from 'vuex'
import http from '../util/http'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    cityId:'310100',
    cityName:'上海',
	cinemaList:[]//异步请求

  },
  //集中式修改
  mutations: {
    changeCityName(state,name){
      // console.log('111111111111111')
      state.cityName=name
    },
    changeCityId(state,cityId){
      state.cityId=cityId
      // console.log(cityId)
    },
    setCinemaList(state,cinemaList){
      state.cinemaList=cinemaList
    },
    clearCinemaList(state){
      state.cinemaList=[]
    }
  },
  actions: {
    getCinemaList(store,cityId){
      http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=3948854`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16203797335352358179504129","bc":"310100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        console.log(res.data.data.cinemas)
        // this.cinemaList = res.data.data.cinemas
        // console.log(res.data)
        store.commit("setCinemaList", res.data.data.cinemas)
      })

    }


  },
  modules: {
  }
  
})
