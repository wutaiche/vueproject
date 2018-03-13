// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from "axios"
import App from './App'
import router from './router'
import {Loadmore,Swipe, SwipeItem,Lazyload}  from "mint-ui"
import dshHead from "./components/Head"
import store  from "./store"
Vue.component("dsh-head",dshHead);

Vue.use(Lazyload);


Vue.config.productionTip = false
Vue.prototype.axios =axios;

Vue.component("dshui-loadmore",Loadmore)
Vue.component("dshui-swip", Swipe);
Vue.component("dshui-swip-item", SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
