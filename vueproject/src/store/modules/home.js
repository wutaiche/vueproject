import Vue from "vue";


export default {

		state:{
         headDate:[],
         activityDate:[],
         hotSellDate:[],
         count:9999,
         page:1
		},
		getters:{

          imgs:state=>state.headDate||[],
          activityDate:state=>state.activityDate||[],
          hotSellDate:state=>state.hotSellDate||[],
          listAllLoaded:state=>(state.page*10>=state.count)

		},
		mutations:{
			setHeadImg(state,payload){
              state.headDate=payload.headDate;
              //console.log(state.headDate);
			},
			setActivity(state,payload){
              state.activityDate = payload.activityDate;
			},
			setHotSell(state,{hotSellDate,count,page}){
			  state.count = count;
			  state.page=page;
			  if(page===1){
			  state.hotSellDate=hotSellDate;
               }else{
              state.hotSellDate=state.hotSellDate.concat(hotSellDate);
               }
			}
		},
		actions:{
			getHeadImg({commit},payload){
             Vue.prototype.axios.get("http://www.dshui.cc/adwap/listAllAdSlide?").then(res=>{
                // console.log(res.data);
             	commit("setHeadImg",{headDate:res.data.data})
             })

			},
			getActivity({commit},payload){
             Vue.prototype.axios.get("http://www.dshui.cc/adwap/loadAds?adids=1%7C2%7C3%7C4%7C5").
             then(res=>{
               
             	commit("setActivity",{activityDate:res.data.data})})

			},
			getHotSell({commit},{page,callback}){
				Vue.prototype.axios.
				get("http://www.dshui.cc/adwap/loadAdsByPadid?padid=6&pageNo="+page).
				then(res=>{
					// console.log(res.data.total_count);
					commit("setHotSell",{hotSellDate:res.data.data,count:res.data.total_count,page})
					 callback&&callback();
				})
			}
		}


}