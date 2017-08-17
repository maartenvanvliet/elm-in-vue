<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Counter reference='counter' :ports="setupPorts"></Counter>

    <button @click="ports.counter.send(10)">Multiply by 10</button>
  </div>
</template>

<script>
import Hello from './components/Hello'
import * as ElmComponent from './elm'

export default {
  name: 'app',
  components: {
    'Counter': ElmComponent(require('./Counter.elm').Main)
  },
  methods: {
    setupPorts: function (ports) {
      ports.watchCounter.subscribe(function (counter) {
        console.log(counter)
      })
      this.ports = ports
    }
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
