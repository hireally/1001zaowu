<template>
  <div class="order-header">
    {{title}}
    <span class="icon-back" @click="$router.go(-1)"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "myheader",
  props: ["title"],
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
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
</style>