<template>
  <div>
    <nav-bar/>
    <router-view></router-view>

  </div>
</template>

<script>
  import NavBar from "../../components/content/NavBar";

  export default {
    name: "Layout",
    components: {
      NavBar,
    }
  }
</script>

<style scoped>

</style>