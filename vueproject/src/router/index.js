import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/home'
import Category from '@/modules/category'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:"/category",
      name:"Category",
      component:Category
    }
  ]
})
