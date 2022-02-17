<template>
  <div id="app">
    <map-component />
  </div>
</template>

<script>
import MapComponent from './components/Map.vue'

export default {
  name: 'App',
  components: {
    MapComponent
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
