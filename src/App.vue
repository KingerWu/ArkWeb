<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  beforeCreate: function() {
    console.log("父", "beforeCreate");
  },
  created: function() {
    console.log("父", "created");
  },
  beforeMount: function() {
    console.log("父", "beforeMount");
  },
  mounted: function() {
    console.log("父", "mounted");
  },
  beforeUpdate: function() {
    console.log("父", "beforeUpdate");
  },
  updated: function() {
    console.log("父", "updated");
  },
  beforeDestroy: function() {
    console.log("父", "beforeDestroy");
  },
  destroyed: function() {
    console.log("父", "destroyed");
  }
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
