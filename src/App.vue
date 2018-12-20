<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "~normalize.css";

#app {
  overflow-x: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

.container {
  margin: 0 auto;
  padding: 0 10px;
  @media (min-width: 700px) {
    width: 600px;
  }
  @media (min-width: 1024px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1039px;
  }
}
</style>
