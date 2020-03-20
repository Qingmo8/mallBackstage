<template>
  <div class="topNav">
    <div id="topbanner" ref="topNav">
      <div class="con">
        <div class="log">
          <span>EGO商城后台系统</span>
        </div>
        <div>
          <router-link exact to="/" class="product">
            <i class="el-icon-search"></i>
            查询商品
          </router-link>
        </div>
        <div>
          <router-link to="/params" class="params">
            <i class="el-icon-copy-document"></i>
            规格参数
          </router-link>
        </div>
        <div>
          <router-link to="/content" class="content">
            <i class="el-icon-postcard"></i>
            内容分类管理
          </router-link>
        </div>
        <div>
          <span class="username">{{userinfo.username}}</span>
          <el-button @click="logout">退出</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapState, mapActions} from 'vuex'
  import Storage from "../../network/http/Storage";

  export default {
    name: "NavBar",
    computed: {
      ...mapState(['userinfo'])
    },
    methods: {
      ...mapActions(['seUserInfoActions']),
      //点击退出，清除vuex与本地缓存的数据
      logout() {
        Storage.clear();
        this.seUserInfoActions({});
        //数据清除完返回登陆页面
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  #topbanner {
    width: 100%;
    height: 80px;
    background: rgb(42, 50, 61);
    margin: 0 auto;
  }

  .con {
    width: 1120px;
    height: 80px;
    margin: 0 auto;
  }

  html {
    padding: 0;
    margin: 0;
  }

  .topNav a {
    text-decoration: none;
    color: #fff;
  }

  .con div {
    float: left;
    width: 220px;
    height: 80px;
    line-height: 80px;
  }

  .backcolor, .classname {
    color: #fff;
    cursor: pointer;
  }

  #topbanner img {
    width: 100%;
    height: 100%;
  }

  .log span {
    font-weight: 800;
    font-style: normal;
    color: #fff;
    font-size: 25px;
    display: block;
  }


  /*使点击的路由高亮*/
  .topNav .active {
    color: green;
  }

  .nick {
    margin-right: 10px;
    color: #fff;
  }

  .username {
    font-size: 20px;
    color: #fff;
    margin-right: 5px;
  }

</style>