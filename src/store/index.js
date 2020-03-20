import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex)

const state = {
  userinfo: {
    username: "",
    token: ""
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})


// export default new Vuex.Store({
//   state: {
//     userinfo:{
//       username:"",
//       token:""
//     }
//   },
//   mutations: {
//     setUserInfo(state,userinfo){
//       state.userinfo = userinfo;
//     }
//   },
//   actions: {
//     seUserInfoActions({commit},userinfo){
//       commit("setUserInfo",userinfo)
//     }
//   }
// })


