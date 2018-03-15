import Vue from "vue";

export default {
state:{
  detail:{},
  cart:[]

},
getters:{
   detail:state=>state.detail
},
mutations:{
   setDetail(state,payload){
   	state.detail=payload.detail;
   },
   setCart(state,payload){
      console.log(state.cart);
       var length = state.cart.length;
    
      if(length==0){
        state.cart.push(payload);
        return;
      }
     
      for (var i=0; i< length ;i++){
           if(state.cart[i].id==payload.id){
                state.cart[i].num ++;
                return;
           }
      }
         state.cart.push(payload);
   }
},
actions:{
	getDetail({commit},{goodsId,callback}){
     Vue.prototype.axios.get("http://www.dshui.cc/goodswap/goodsDetail?goodsId="+goodsId+"&token=").
     then(res=>{
     	   // console.log(res.data.data);
     	  commit("setDetail",{"detail":res.data.data})
          callback&&callback();
     })

	}

}




}