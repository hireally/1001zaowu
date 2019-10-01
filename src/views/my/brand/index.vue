<template>
  <div class="collect">
    <myheader title="我的收藏" />
    <ScrollLayer class="collect-content"></ScrollLayer>
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
.collect-content {
  margin-top: 10px;
  height: calc(100% - 20px);
  background: #f1ece7;
  border-radius: 20px;
}
</style>