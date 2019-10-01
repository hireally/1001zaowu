<template>
  <div class="my">
    <div class="my-header">
      <div class="avatar"></div>
      <div class="my-info">
        <span v-if="!logged">你还没登录呢</span>
      </div>
      <div class="setting"></div>
    </div>
    <div class="login-btns" v-if="!logged">
      <button>注册</button>
      <button class="login">登录</button>
    </div>
    <div class="my-order">
      <div class="my-order-header">
        <span>我的订单</span>
        <span class="my-order-more-btn" @click="$router.push({name:'order'})"></span>
      </div>
      <hr />
      <div class="order-items">
        <router-link tag="div" :to="{name:'orderPP'}" class="order-pending-payment">
          <div class="icon"></div>
          <span>待付款</span>
        </router-link>
        <router-link tag="div" :to="{name:'orderPaid'}" class="order-pending-receive">
          <div class="icon"></div>
          <span>待收货</span>
        </router-link>
        <router-link tag="div" :to="{name:'orderFull'}" class="order-fulled">
          <div class="icon"></div>
          <span>已完成</span>
        </router-link>
        <router-link tag="div" :to="{name:'postSale'}" class="order-post-sale">
          <div class="icon"></div>
          <span>售后</span>
        </router-link>
      </div>
    </div>
    <div class="my-meum">
      <router-link tag="div" :to="{name:'myArticle'}" class="meum-collect">
        <div class="icon"></div>
        <span>收藏</span>
      </router-link>
      <router-link tag="div" :to="{name:'myArticle'}" class="meum-brand">
        <div class="icon"></div>
        <span>收藏</span>
      </router-link>
      <router-link tag="div" :to="{name:'myArticle'}" class="meum-article">
        <div class="icon"></div>
        <span>收藏</span>
      </router-link>
      <router-link tag="div" :to="{name:'address'}" class="meum-address">
        <div class="icon"></div>
        <span>地址</span>
      </router-link>
      <router-link tag="div" :to="{name:'myCard'}" class="meum-card">
        <div class="icon"></div>
        <span>卡包</span>
      </router-link>
      <router-link tag="div" :to="{name:'myArticle'}" class="meum-service">
        <div class="icon"></div>
        <span>收藏</span>
      </router-link>
      <router-link tag="div" :to="{name:'myAccount'}" class="meum-security">
        <div class="icon"></div>
        <span>账户</span>
      </router-link>
      <router-link tag="div" :to="{name:'myArticle'}" class="meum-about">
        <div class="icon"></div>
        <span>收藏</span>
      </router-link>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my",
  data() {
    return {
      logged: false
    };
  }
};
</script>

<style lang='scss' scoped>
$icons: ("pending-payment", "pending-receive", "fulled", "post-sale");
@each $icon in $icons {
  .order-#{$icon} .icon {
    background-image: url("../../assets/imgs/icons/icon-#{$icon}.png");
  }
}
$meumIcons: (
  "collect",
  "brand",
  "article",
  "address",
  "card",
  "service",
  "security",
  "about"
);
@each $icon in $meumIcons {
  .meum-#{$icon} .icon {
    background-image: url("../../assets/imgs/icons/icon-#{$icon}.png");
  }
}

.my {
  padding: 0 20px;
  font-size: 13px;
  color: #3e3e3e;
  background: #f1ece7;
  height: 100%;
  .my-header {
    padding-top: 3px;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: bolder;
    .avatar {
      height: 75px;
      width: 75px;
      border-radius: 50%;
      background: url(../../assets/imgs/icons/icon-avatar.png) center/100%
        no-repeat;
      margin-right: 10px;
    }
    .setting {
      position: absolute;
      top: 10px;
      right: 0px;
      width: 25px;
      height: 25px;
      background: url(../../assets/imgs/icons/icon-setting.png) no-repeat
        center/100%;
    }
  }
  .login-btns {
    padding: 16px 23px;
    display: flex;
    justify-content: space-around;
    button {
      box-sizing: border-box;
      height: 40px;
      width: 90px;
      border-radius: 5px;
      font-size: 15px;
      background: none;
      border: 1px #354e44 solid;
      &.login {
        background-color: #354e44;
        color: #ffffff;
        letter-spacing: 1.07px;
      }
    }
  }
  .my-order {
    padding: 16px 23px;
    background-color: white;
    border-radius: 5px;
    .my-order-header {
      display: flex;
      justify-content: space-between;
      .my-order-more-btn {
        height: 13px;
        width: 13px;
        background: url("../../assets/imgs/icons/icon-more.png") center/100%
          no-repeat;
      }
    }
    .order-items {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      & > div {
        display: flex;
        flex-direction: column;
        .icon {
          height: 20px;
          background-size: auto 100%;
          background-position: center;
          background-repeat: no-repeat;
        }
        span {
          padding: 10px;
        }
      }
    }
  }
  .my-meum {
    padding: 20px 20px;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    & > div {
      position: relative;
      display: flex;
      flex-basis: 30%;
      flex-direction: column;
      align-items: center;
      & span {
        margin: 20px 0;
      }
    }
    .icon {
      height: 28px;
      width: 100%;
      background-position: center;
      background-size: auto 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>