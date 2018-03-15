<template>
<div class="sup-wrap">
 <dsh-head>
 
 <div class="top">
   <p class="input"> <i class="fa fa-search"></i>  搜索你喜欢的宝贝 </p>
   </div>
 </dsh-head>
 <div class="wrap">
  <div class="wrap-left">
  <ul>
  <li v-for="(item,index) in category "  :class="{'active':!index}" :key="index"
         @click="getMyBrand(item.id,$event)" >
   {{item.name}}
  </li>
  
  </ul>
  </div>
  <div class="wrap-right">
  <ul class="clearfix">
    <router-link :to="{path:'product/productList', query: {ctgyId:item.id}}" tag="li"  v-for="(item,index) in brand" :key="index" >
     <img v-lazy="item.imgUrl"/>
     <p>  {{item.name}}  </p>
  </router-link>
  </ul>
  </div>
 </div>
 </div>
</template>
<script>
 import {mapGetters,mapActions} from "vuex";

 export default {
   name:"Category",
   data(){
   	return{
   		myScroll:""
   		
   	}
   },

   computed:{
   	...mapGetters(["category","brand"])
   },
   methods:{
   	...mapActions(["getCategory","getBrand"]),
   	getMyBrand(id,event){
   		 // $(this).addClass("active").siblings().removeClass("active");
          $(event.currentTarget).addClass("active").siblings().removeClass("active");
   		  this.getBrand(id);
   	}

   },
   mounted(){

   	    this.getCategory();
   	    this.getBrand(4);

   	    
   },
   updated(){
    
   	var myScroll2 = new IScroll('.wrap-right');
   	this.myScroll = this.myScroll||new IScroll('.wrap-left');
   	
   }


 }




</script>
<style lang="scss">

.top{
	padding:px2rem(8px) px2rem(10px);
	height:100%;
	.input{
		display:flex;
		align-items: center;
		justify-content: left;
		background:white;
		height:100%;
		/*text-align: left;*/
		padding-left:px2rem(16px);
		i{
			font-size: px2rem(20px);
		}
	}
}
.sup-wrap{
	overflow:hidden;
	height:100%;
}
.wrap{
	overflow:hidden;
	
	/*flex:1;*/
	margin-top:px2rem(44px);
	/*margin-bottom:px2rem(44px);*/
	height:calc(100% - 100px);
}
.wrap-left{
	width:25%;
	background:#f0f0f0;
	height:100%;
	float:left;
	li{
		height:px2rem(50px);
		line-height: px2rem(50px);
		/*font-weight: 600;*/
		font-size:px2rem(12px);
	}
	li.active{
	background: #fff;
    border-left: 2px solid #000;
    color: #000;
    font-weight: 600;
	}
}
.wrap-right{
	float:left;
	height:100%;
	width:75%;
	overflow:hidden;
	/*width:px2rem(500px);*/
	/*background:red;*/
	li{
		float:left;
	   width:33%;
	   
       p{
       	height:px2rem(30px);
       	font-size: px2rem(12px);
       }
	}
	img{
		width:px2rem(80px);
		height:px2rem(80px);
		padding:0 px2rem(4px);
	}
}



</style>