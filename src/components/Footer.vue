<template>
  <div class="footer-main">
    <div id="footer">
      <router-link class="footer-icon icon-home" :to="{name:'home'}" exact>
        <span>首页</span>
      </router-link>
      <router-link class="footer-icon icon-sort" :to="{name:'sort'}">
        <span>分类</span>
      </router-link>
      <router-link class="footer-icon icon-find" :to="{name:'find'}">
        <span>发现</span>
      </router-link>
      <router-link class="footer-icon icon-user" :to="{name:'my'}">
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.footer-main {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 54px;
  #footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .footer-icon {
      position: relative;
      width: 26px;
      height: 26px;
      margin-top: 11px;
      margin-bottom: 20px;
      background-position: center;
      background-size: 26px 26px;
      text-align: center;
      & span {
        position: absolute;
        top: 28px;
        left: 0;
        width: 100%;
        color: black;
      }
      &.icon-home {
        background-image: url("../assets/imgs/icons/home.png");
      }
      &.icon-home.router-link-active {
        background-image: url("../assets/imgs/icons/home_active.png");
      }
      &.icon-sort {
        background-image: url("../assets/imgs/icons/sort.png");
      }
      &.icon-sort.router-link-active {
        background-image: url("../assets/imgs/icons/sort_active.png");
      }
      &.icon-find {
        background-image: url("../assets/imgs/icons/find.png");
      }
      &.icon-find.router-link-active {
        background-image: url("../assets/imgs/icons/find_active.png");
      }
      &.icon-user {
        background-image: url("../assets/imgs/icons/user.png");
      }
      &.icon-user.router-link-active {
        background-image: url("../assets/imgs/icons/user_active.png");
      }
    }
  }
}
</style>