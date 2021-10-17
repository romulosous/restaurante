<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  #app {
    max-width: calc(100% - 20px);
    margin: 20px;
  }
}
</style>
