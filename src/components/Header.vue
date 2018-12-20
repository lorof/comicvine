<template>
  <header class="header">
    <div class="container">
      <router-link v-bind:to="{ path: `/`}">
        <img class="logo" src="../assets/logo.svg" alt="джетстайл">
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: #52607F;
    height: 40px;
    margin-bottom: 30px;
  }

  .logo {
    margin-top: 8px;
    width: 87px;
    height: 18px;
  }
</style>