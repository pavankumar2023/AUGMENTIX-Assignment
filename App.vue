<template>
  <TheNavigation/>
<div class="container">
  <div class="row">
    <div class="col-mid-12">
<div>
<router-view></router-view>

</div>
</div>
</div>
</div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
// eslint-disable-next-line no-unused-vars


export default {
  name: 'App',
  components: {
    TheNavigation,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: corner;
  color: #1e0a9d;
  margin-top: 25px;
}
</style>
