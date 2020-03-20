<template>
  <div>
    <div class="content">
      <div class="content-left">
        <category @onContentId="getContentId"/>
      </div>
      <div class="content-right">
        <content :currentId="currentId"/>
<!--        <Content :currentId="currentId"/>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Category from "./childComps/Category";
  import Content from "./childComps/Content";

  export default {
    name: "ContentCategory",
    components: {
      Category,
      Content
    },
    data() {
      return {
        currentId: {}
      };
    },
    methods:{
      getContentId(data) {
        this.currentId = data;
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 70%;
    height: 200px;
    margin: 0 auto;
    margin-top: 10px;
  }

  .content-left {
    float: left;
    width: 25%;
    height: 100%;
  }

  .content-right {
    float: left;
    width: 75%;
    height: 100%;
  }

  .custom-tree-node {
    display: inline-block;
    text-align: right;
    width: 100%;
  }
  .upload img {
    width: 200px;
  }

</style>