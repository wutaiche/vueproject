import Vuex from "vuex";
import Vue from "vue";
import home from "./modules/home"
import category from "./modules/category"
Vue.use(Vuex);

const Store = new Vuex.Store({
  modules:{
  	 home,category
  }

})

export default  Store;