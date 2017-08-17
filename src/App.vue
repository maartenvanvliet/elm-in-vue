<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Counter reference='counter'></Counter>
  </div>
</template>

<script>
import Hello from './components/Hello'
import * as ElmComponent from './elm'

export default {
  name: 'app',
  components: {
    'Counter': ElmComponent(require('./Counter.elm').Main)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
