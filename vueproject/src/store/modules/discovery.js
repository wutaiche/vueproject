import Vue from "vue";

export default {
  state:{
   discovery:[]

  },
   getters:{
    discovery:state=>state.discovery
  },
  mutations:{
  	setDiscovery(state,payload){
        state.discovery=payload.discovery;
  	}

  },
 
  actions:{
  	getDiscovery({commit},payload){
  		Vue.prototype.axios.get("http://www.dshui.cc/tpcwap/list?pageNo=1&token=")
  		 .then(res=>{
  		 	  commit("setDiscovery",{"discovery":res.data.data})
  		 })



  	}

  }




}