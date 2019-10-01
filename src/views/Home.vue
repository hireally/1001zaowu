<template>
  <div class="home">
    <ScrollLayer class="sl">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ScrollLayer>
  </div>
</template>

<script>
// @ is an alias to /src
import ScrollLayer from "@/components/ScrollLayer.vue";

export default {
  name: "home",
  components: {
    ScrollLayer
  }
};
</script>

<style lang="scss">
.home {
  .sl {
    height: 500px;
  }
  li {
    background-color: olive;
    margin: 20px;
    height: 200px;
  }
}
</style>
