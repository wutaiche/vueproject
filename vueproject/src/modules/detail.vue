<template>
<div>
<dsh-head>
<ul class="search"> 
     <li @click="$router.go(-1)" class="back"><i class="fa fa-angle-left"></i></li>
     <li  class="back">  </li>
     <li class="input"> 商品详情</li>
     <router-link to="/cart" tag="li" class="mes"><i class="fa fa-cart-plus"></i></router-link>
     <li class="mes"><i class="fa fa-list-ul"></i></li>
</ul>
</dsh-head>
<div class="content">
<!-- {{detail.goods.imgUrl}} -->
<!-- <img  class="head-img" :src="detail.goods.imgUrl"/>
 -->

<img  class="head-img" :src="imgUrl"/>
<div class="name">
<span>  {{name }}  </span>
<span>  <i class="fa fa-heart-o"> </i> <br> 收藏 </span>
</div>
<div class= "price">
￥{{ price | price}}
</div>
<div class="detail" v-html="detailimg">

</div>
<div class="buy"><span class="item">立即购买</span></span> <span @click="cart()" class="item">加入购物车</span></div>
</div>
</div>

</template>
<script>
import {mapGetters,mapActions} from "vuex"
export default {
filters: {
  price: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.slice(0,-2) +"."+value.slice(-2)
  }
},
name:"Detail",
data(){
	return{
		imgUrl:"",
		name:"",
		price:"",
		detailimg:"",
		id:""
	}
},
computed:{
  ...mapGetters(["detail"])
},
methods:{
  ...mapActions(["getDetail"]),
  cart(){
    this.$store.commit("setCart",{num:1,id:this.id,name:this.name,price:this.price});
    console.log(1);
  }
},
beforeRouteEnter (to, from, next) {
  next(vm => {
  	   window.scrollTo(0, 0);
       vm.getDetail({goodsId:vm.$route.query.goodsId,callback:()=>{
      vm.imgUrl = vm.detail.goods.imgUrl;
      vm.name = vm.detail.goods.name;
      vm.price = vm.detail.goods.marketPrice;
      vm.detailimg = vm.detail.goods.details;
      vm.id = vm.detail.goods.id
  }});
  })
},
beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    	//this.product.set([]);
    	// ...mapGetters(["product"]);
    	this.imgUrl="";
    	this.name="";
    	this.price="";
    	this.detailimg="";
    	next();
  },
updated(){
	$(".detail img").css("width","100%");
}

}

</script>
<style lang="scss" scoped>
.content{
	margin-top:55px;
}
ul.search{
   display:flex;
   align-items:center;
}
li.back,li.mes{
	width:16%;
	line-height: px2rem(44px);
	height:px2rem(44px);
	color:white;
  text-align: center;
   font-size: px2rem(32px);
}
li.input{
	flex:1;
    height:px2rem(32px);
    /*background:white;*/
    line-height: px2rem(32px);
    color:white;
    /*text-align: left;*/
    /*padding:0 px2rem(16px);*/

}
.content{
	margin-top: px2rem(44px);
}
.head-img{width:100%;}
.name{
	margin-top:px2rem(22px);
	padding:px2rem(10px) 0 px2rem(5px) 0;
	 font-size: px2rem(12px);
	span:first-child{
        width:80%;
        line-height: px2rem(18px);
        display:inline-block;
       
        text-align: left;
	}
   span:not(:first-child){
    padding-left:px2rem(10px);
    border-left:1px solid #e0e0e0;
    display:inline-block;
    width:px2rem(52px);
    
   }
	
}
.price{
	text-align: left;
}
.detail{
	 width:100%;
}
.buy{
	position: fixed;
    z-index: 999999;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    max-width: 640px;
    line-height: 50px;
    background: #fff;
    text-align: center;
}
.item{
	width: 49%;
    height: 50px;
    background: #000;
    color: #fff;
    font-size: 16px;
    display:inline-block;
    /*float: right;*/
}
</style>