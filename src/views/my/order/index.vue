<template>
  <div class="order">
    <div class="order-header">
      订单列表
      <span class="icon-back" @click="$router.go(-1)"></span>
    </div>
    <div class="order-meum">
      <router-link :to="{name:'orderAll'}" class="order-meum-text">全部</router-link>
      <router-link :to="{name:'orderPP'}" class="order-meum-text">待付款</router-link>
      <router-link :to="{name:'orderPaid'}" class="order-meum-text">已付款</router-link>
      <router-link :to="{name:'orderFull'}" class="order-meum-text">已完成</router-link>
    </div>
    <ScrollLayer class="order-content">
      <router-view></router-view>
    </ScrollLayer>
  </div>
</template>

<script>
import ScrollLayer from "@/components/ScrollLayer.vue";
export default {
  name: "order",
  components: {
    ScrollLayer
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.order {
  background: #354e44;
  height: 100%;

  .order-header {
    position: relative;
    height: 24px;
    font-size: 17px;
    color: #ffffff;
    letter-spacing: 1.21px;
    text-align: center;
    line-height: 24px;
    .icon-back {
      position: absolute;
      height: 100%;
      background: url(../../../assets/imgs/icons/icon-back.png) center/100%
        no-repeat;
      left: 10px;
      top: 0px;
      width: 20px;
    }
  }
  .order-meum {
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #ffffff;
    letter-spacing: 1.07px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    .order-meum-text {
      position: relative;
      text-emphasis: none;
      text-decoration: none;
      color: #ffffff;
    }
    .order-meum-text.router-link-active::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      bottom: -10px;
      background: #f1ece7;
      border: 1px solid #f1ece7;
      border-radius: 5px 5px 0 0;
    }
  }
  .order-content {
    margin-top: 10px;
    height: calc(100% - 50px);
    background: #f1ece7;
    border-radius: 20px;
  }
}
</style>