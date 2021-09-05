//自己封装的请求axios
import request from '../utils/request'
// import store from '@/store/'

//用户请求模块
export const login = data =>{
  return request({
    method:'POST',
    url:'/app/v1_0/authorizations',
    data
  })
}

//发送手机验证码
export const sendSms = mobile =>{
  return request({
    method:'GET',
    url:`/app/v1_0/sms/codes/${mobile}`
  })
}
//获取用户自己的信息
export const getCurrentUser = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
    // headers:{
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  })
}

//获取用户频道列表
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'

  })
}


