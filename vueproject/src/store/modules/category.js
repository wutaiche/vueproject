import Vue from "vue";

export default {
	state:{
     category:[],
     brand:[]

	},
	getters:{
      category:(state)=>state.category,
      brand:(state)=>state.brand
	},
	mutations:{
     setCategory(state,payload){
     	 state.category = payload.category;
     },
     setBrand(state,payload){
     	state.brand = payload.brand;
     }
	},
	actions:{

		getCategory({commit},payload){
		Vue.prototype.axios.get("http://www.dshui.cc/goodswap/allCtgy?")
			.then(res=>{
				//console.log(res.data.data);
               commit("setCategory",{"category":res.data.data})

			})
    
	},
	    getBrand({commit},payload){
	   Vue.prototype.axios.get("http://www.dshui.cc/goodswap/subCtgyList?parentId="+payload)
	       .then(res=>{
	       	   // console.log(res.data.data);
	       	   commit("setBrand",{"brand":res.data.data})
	       })
	    }
  }
}