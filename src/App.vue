<template>
  <div id="app">
    <base-navbar></base-navbar>
    <router-view/>
  </div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar.vue'
export default {
  name: 'App',
  components: { BaseNavbar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #33d6f3;
}
</style>
