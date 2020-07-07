<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
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
