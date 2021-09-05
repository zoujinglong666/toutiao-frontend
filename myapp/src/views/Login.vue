<template>

  <div class="centered">
    <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt="">

    <van-field v-model="tel" type="tel" label="手机号" maxlength="11"/>
    <van-field
      v-model="sms"
      center
      clearable
      label="验证码"
      placeholder="请输入验证码"
    >
      <template #button>
        <van-button size="small" type="primary" color="#A5A5A5">发送验证码</van-button>
      </template>
    </van-field>
    <div class="login-btn-wrap">
      <van-button color="linear-gradient(to right, #FF8100, #FF5100)" block style="margin: 20px 0;" @click="handleRegister" class="login-btn">
        登录
      </van-button>
    </div>


  </div>


</template>
<script>
  export default {
    data() {
      return {
        tel: '',
        text: '',
        digit: '',
        number: '',
        password: '',
        sms:''
      }
    },
    methods:{
      handleRegister(){
        this.$router.push('/center')
      }


    }
  }
</script>
<style lang="scss" scoped>
    img {
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      margin:50px auto;
      width: 64px;
      height: 64px;
    }
	.login-btn-wrap{
    padding: 15px;
  }

</style>
