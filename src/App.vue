<template>
  <div id="App">
    <navbar></navbar>
    <router-link to="/News"></router-link>
    <router-link to="/Users"></router-link>
    <router-view></router-view>
    <sidebar></sidebar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import sidebar from "./components/sidebar";

export default {
  name: "App",
  components: {
    Navbar,
    sidebar
  }
};
</script>


