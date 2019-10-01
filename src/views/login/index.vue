<template>
  <div class="login-main">
    <div class="login-c">
      <div class="header">
        <div class="box"></div>
        <div class="myImg">
          <img :src="url" alt />
        </div>
      </div>
      <div class="content">
        <van-field v-model="username" clearable left-icon="contact" placeholder="请输入手机号/邮箱" />
        <van-field
          v-model="password"
          :type="passShow?'password':'text'"
          left-icon="lock"
          right-icon="closed-eye"
          placeholder="请输入密码"
          @click-right-icon="passShow=!passShow"
        />
        <van-button type="primary" size="large">登录</van-button>
        <div class="content-foot">
          <span>海外手机号登录</span>
          <span>忘记密码</span>
        </div>
      </div>
      <div class="login-foot">
        <div class="title">立即注册</div>
        <div class="other-title">
          <span class="line"></span>
          <span class="other">第三方软件登录</span>
          <span class="line"></span>
        </div>
        <div class="other-login">
          <div class="login qq"></div>
          <div class="login wx"></div>
          <div class="login wb"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Button } from "vant";
export default {
  name: "Login",
  components: {
    vanField: Field,
    vanButton: Button
  },
  data() {
    return {
      url: require("@/assets/imgs/login/logo.png"),
      username: "",
      password: "",
      passShow: true
    };
  }
};
</script>

<style lang='scss' scoped>
.login-main {
  width: 100%;
  height: 100%;
  background-color: #f1ece7;
  .login-c {
    width: 268px;
    margin: 0 auto;
    .header {
      width: 100%;
      height: 228px;
      .box {
        width: 100%;
        height: 67px;
      }
      .myImg {
        width: 106px;
        height: 106px;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .content {
      width: 100%;
      .van-cell {
        width: 100%;
        height: 39px;
        margin: 18px auto;
        border-radius: 7px;
      }
      .van-button {
        width: 100%;
        height: 47px;
        border-radius: 7px;
        color: #fff;
        background-color: #354e44;
      }
      .content-foot {
        width: 100%;
        height: 17px;
        margin: 11px auto 0;
        color: #a5a5a5;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .login-foot {
      width: 100%;
      margin-top: 99px;
      .title {
        width: 86px;
        height: 28px;
        margin: 0 auto;
        font-size: 20px;
        color: #354e44;
        letter-spacing: 1.43px;
      }
      .other-title {
        width: 100%;
        height: 17px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .line {
          width: 63px;
          height: 1px;
          background-color: #dddddd;
        }
        .other {
          width: 91px;
          height: 17px;
          color: #a5a5a5;
        }
      }
      .other-login {
        width: 100%;
        height: 32px;
        margin-top: 34px;
        display: flex;
        justify-content: space-between;
        .login {
          width: 32px;
          height: 32px;
          background-position: center;
          background-size: 32px 32px;
          &.qq {
            background-image: url("../../assets/imgs/icons/QQ.png");
          }
          &.wx {
            background-image: url("../../assets/imgs/icons/wx.png");
          }
          &.wb {
            background-image: url("../../assets/imgs/icons/wb.png");
          }
        }
      }
    }
  }
}
</style>