<template>
  <div>
    <params-list/>
  </div>

</template>

<script>
  import ParamsList from "./childComps/ParamsList"

  export default {
    name: "Params",
    components:{
      ParamsList
    },
    data(){
      return{

      }
    },
  }
</script>

<style scoped>

</style>