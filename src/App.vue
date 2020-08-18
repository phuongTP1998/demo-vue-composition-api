<template>
  <div id="app">
    <VueOptionApi />
    <VueCompositionApi />
    <VueCompositionX />
  </div>
</template>

<script>
import VueOptionApi from './components/VueOptionApi'
import VueCompositionApi from './components/VueCompositionApi'
import VueCompositionX from './components/VueCompositionX'

export default {
  name: 'App',
  components: {
    VueOptionApi,
    VueCompositionApi,
    VueCompositionX,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
