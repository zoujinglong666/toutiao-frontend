//自己封装的请求axios
import request from '../utils/request'
// import store from '@/store/'

//频道新闻推荐_V1.1
export const getNews = (params) => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params

  })
}
