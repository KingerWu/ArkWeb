<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  beforeRouteEnter(to, from, next) {
    console.log(
      "组件守卫",
      "beforeRouteEnter, from:" + from.name + ", to:" + to.name
    );
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(
      "组件守卫",
      "beforeRouteUpdate, from:" + from.name + ", to:" + to.name
    );
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(
      "组件守卫",
      "beforeRouteLeave, from:" + from.name + ", to:" + to.name
    );
    next();
  },
};
</script>
