<template>
  <div class="my-container">

    <van-cell-group class="my-info" :border="false" v-if="user">
      <van-cell  center class="base-info" :border="false">
          <div slot="icon">
            <van-image
              class="avater"
              round
              :border="false"
              :src="CurrentUser.photo"
            />
          </div>
          <div slot="title" style="color: #fff; font-size: 15px;">{{CurrentUser.name}}</div>
          <van-button round size="small" class="means">编辑资料</van-button>
        </van-cell>
        <van-grid :border="false" class="data-info">

                  <van-grid-item class="data-info-item">
                    <div slot="text" class="text-warp">
                      <div class="span">{{CurrentUser.art_count}}</div>
                      <div class="text">头条</div>
                    </div>
                  </van-grid-item>
                  <van-grid-item class="data-info-item">
                    <div slot="text" class="text-warp">
                      <div class="span">{{CurrentUser.follow_count}}</div>
                      <div class="text">关注</div>
                    </div>
                  </van-grid-item>
                  <van-grid-item class="data-info-item">
                    <div slot="text" class="text-warp">
                      <div class="span">{{CurrentUser.fans_count}}</div>
                      <div class="text">粉丝</div>
                    </div>
                  </van-grid-item>
                  <van-grid-item class="data-info-item">
                    <div slot="text" class="text-warp">
                      <div class="span">{{CurrentUser.like_count}}</div>
                      <div class="text">点赞</div>
                    </div>
                  </van-grid-item>
        </van-grid>
    </van-cell-group >
      <!-- 未登录 -->
      <div v-else class="not-login" >
        <div @click="$router.push('/login')"><img src="../assets/head.png" alt="" class="mobile"></div>
        <div class="login-text" style="font-size: 14px; color: #fff; padding-top: 8px;">登录/注册</div>

      </div>



    <van-grid :column-num="2" :border="false" style="background-color: #fff;">
      <van-grid-item icon="star-o" text="收藏" style="color: #eb5455;"/>
      <van-grid-item icon="underway-o" text="历史" style="color: #ff9f21;"/>
    </van-grid>
        <van-cell title="消息通知" is-link to="index" class="mb-5"/>
        <van-cell title="小智同学" is-link to="index" />
         <van-cell v-if="user"
         class="logout mb-5"
         title="退出登录"
         @click="handleLogout"
         />
  </div>
</template>

<script>
  import { Dialog } from 'vant';
  import {mapState} from 'vuex'
  import {getCurrentUser} from '../api/user'
  export default{
    data(){
      return{
        CurrentUser:{

        }

      }
    },
    computed:{
      ...mapState(['user'])

    },
    created() {
      this.loadCurrentUser()
    },
    methods:{
      handleLogout(){
        this.$dialog.confirm({
          title: '退出提示',
          message: '确认退出吗',
        })
          .then(() => {
            //确认里面的代码
            this.$store.commit('setUser',null)
          })
          .catch(() => {
            //取消里面的代码
          });
      },
      async loadCurrentUser(){
        const {data} = await getCurrentUser()
        console.log(data)
        this.CurrentUser=data.data
      }

    }

  }
</script>

<style lang="less" scoped>
  .my-container{
    width: 100%;
    height: 200px;
    background: url(../assets/myinfo.png);
    background-color: #409DFA;
    background-size: cover;
    .base-info{
      box-sizing: border-box;
      height: 116px;
      padding-top: 38px;
      padding-bottom: 11px;
      background: unset;
      .avater{
        box-sizing: border-box;
        width: 66px;
        height: 66px;
        border: 1px solid #fff;
        margin-right: 11px;
      }
      .means{
        //里面的内容自动撑开就不要设置宽
        height: 16px;
        font-size: 10px;
        line-height: 16px;
        color: #666;

      }


    }
  }
  .van-cell-group{
    background: unset;
  }
  //只修改这部分的页面，其他页面的样式不做修改。在前面加入/deep/
  /deep/.van-grid-item__content{
    background: unset;
  }
  // .nums span{
  //   font-size: 18px;
  //   color: #fff;
  // }
  .data-info{

    .data-info-item{
      height: 66px;
      color: #fff;
      .text-warp{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .span{
          font-size: 18px;
        }
        .text{
          font-size: 12px;
          padding-top:5px
        }

      }

    }
  }
  .logout{
    text-align: center;
    color: #d86262;

  }
  .mb-5{
    margin-top: 5px;
  }
  //未登录样式
  .not-login{
    height: 180px;
    background: url(../assets/myinfo.png) no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mobile{
      width: 66px;
      height: 66px;
    }

  }



</style>
