<template>
  <div class="scroll-wapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  name: "BaseLayer",
  data() {
    return {};
  },
  mounted() {
    this.$scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true
    });
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.scroll-wapper {
  overflow: hidden;
}
</style>

