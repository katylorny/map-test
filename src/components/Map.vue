<template>
  <div class="map" id="map"/>
</template>

<script>

import {initMap} from "../core";

export default {
  name: "Map",
  mounted() {
    initMap(this)
  }
}
</script>

<style lang="scss" scoped>
.map {
  min-height: 100vh;
}
</style>