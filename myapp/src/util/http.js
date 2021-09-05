import axios from 'axios'
//封装的http

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000, // 10秒钟没请求到数据就报错
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16203797335352358179504129","bc":"310100"}'

  }

})
export default http
