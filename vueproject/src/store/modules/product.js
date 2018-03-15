import Vue from "vue";

export default {
  state:{
  	product:[]
  },
  getters:{
  	product:state=>state.product
  },
  mutations:{
  	setProduct(state,payload){
  		state.product = payload.product;
  	}
  },
  actions:{
   getProduct({commit},payload){
        Vue.prototype.axios.get("http://www.dshui.cc/goodswap/ctgyGoods?ctgyId="+payload+"&pageNo=1&sort=").
        then(res=>{
        	//console.log(res.data.data)
        	commit("setProduct",{"product":res.data.data})
        })
   }
  }

}