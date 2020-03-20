<template>
  <div>
    <product-list/>
  </div>
</template>
<script>
  import ProductList from "./childComps/ProductList";

  export default {
    name: "ProductSelect",
    components: {
      ProductList
    }
  };
</script>

