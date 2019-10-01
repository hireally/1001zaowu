<template>
  <div id="app">
    <router-view />
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>
<style lang="scss">
body,
html {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
