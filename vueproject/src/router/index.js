import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/home'
import Category from '@/modules/category'
import Discovery from '@/modules/discovery'
import Product   from '@/modules/product'
import ListFile from "@/modules/listFile"
import Detail  from "@/modules/detail"
import Cart  from '@/modules/cart'
import User  from '@/modules/user'
Vue.use(Router)


const router=new Router({
	 mode:"history",
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
    },
    {
    	path:"/discovery",
    	name:"Discovery",
    	component:Discovery
    },
    {
    	path:"/product/productList",
    	name:"Product",
    	component:Product
    },
    {
      path:"/activity/template3",
      name:"ListFile",
      component:ListFile
    },
    {
      path:"/product/productDetail",
      name:"Detail",
      component:Detail
    },
    {
      path:"/cart",
      name:"Cart",
      component:Cart
    },
    {
      path:"/user",
      name:"User",
      component:User
    }
  ]
})

// router.afterEach((to, from, next) => {
//     window.scrollTo(0, 0);
// });
export default router;
