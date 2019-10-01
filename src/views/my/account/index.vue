<template>
  <div class="account">
    <myheader title="我的收藏" />
    <ScrollLayer class="collect-content">
      <div class="account-item">
        <div class="account-item-name">个人资料</div>
        <div class="btn-more"></div>
      </div>
      <div class="account-item">
        <div class="account-item-name">绑定手机号</div>
        <div class="btn-more"></div>
      </div>
      <div class="account-item">
        <div class="account-item-name">微信账号</div>
        <div class="btn-more"></div>
      </div>
      <div class="account-item">
        <div class="account-item-name">QQ账号</div>
        <div class="btn-more"></div>
      </div>
      <div class="account-item">
        <div class="account-item-name">支付绑定</div>
        <div class="btn-more"></div>
      </div>
      <div class="account-item">
        <div class="account-item-name">设置登录密码</div>
        <div class="btn-more"></div>
      </div>
    </ScrollLayer>
  </div>
</template>

<script>
import ScrollLayer from "@/components/ScrollLayer.vue";
import myheader from "../components/header.vue";

export default {
  name: "collect",
  components: {
    ScrollLayer,
    myheader
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.account {
  height: 100%;
  background: #354e44;
}
.collect-content {
  margin-top: 10px;
  height: calc(100% - 20px);
  background: white;
  border-radius: 20px;
  padding: 20px;
}
.account-item {
  font-size: 16px;
  color: #3e3e3e;
  letter-spacing: 1.14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #7080905e;
  .btn-more {
    height: 17px;
    width: 17px;
    background: url(../../../assets/imgs/icons/icon-more.png) center/100%
      no-repeat;
  }
}
</style>