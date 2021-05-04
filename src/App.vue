<template>
  <div id="app">
    <!-- 在 router-view 中调用其他组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
@import "css/hover-min.css";
body,
html {
  margin: 0;
  padding: 0;
}
</style>
