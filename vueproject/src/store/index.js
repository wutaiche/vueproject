import Vuex from "vuex";
import Vue from "vue";
import home from "./modules/home"
import category from "./modules/category"
import discovery from "./modules/discovery"
import product from "./modules/product"
import detail from "./modules/detail"
Vue.use(Vuex);

const Store = new Vuex.Store({
  modules:{
  	 home,category,discovery,product,detail
  }

})

export default  Store;