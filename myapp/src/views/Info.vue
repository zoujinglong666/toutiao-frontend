<template>
  <div>
    <ul>
      <!-- 前台信息 -->
      <li v-for="(item,index) in infoList" :key="index">
        <p style="text-align: center; margin-top: 50px; font-size: 20px;padding-bottom: 5px;">{{item.name}}</p>
            <div class="services">
              <li v-for="(data,index) in item.services " :key="index" >
            	{{data.name}}
            </li>
            </div>
      </li>
    </ul>

  </div>

</template>

<script>
 import http from '../util/http'
 export default {
    data() {
      return {
        infoList: []
      }
    },
    mounted() {
      http({
        url:`/gateway/?cinemaId=${this.$route.params.cinemaId}&k=9254224`,
        headers:{
          'X-Host': 'mall.film-ticket.cinema.info'
        }
      }).then(res=>{
        console.log(res.data.data)
        this.infoList=res.data.data

      })
    }


  }
</script>

<style>



</style>
