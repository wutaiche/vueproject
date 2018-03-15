<template>
<div>
<dsh-head>
<ul class="search"> 
     <li @click="$router.go(-1)" class="back"><i class="fa fa-angle-left"></i></li>
     <li class="input"> <i class="fa fa-search"></i>  搜索你喜欢的宝贝 </li>
     <li class="mes"><i class="fa fa-list-ul"></i></li>
</ul>
</dsh-head>
<div class="wrap">
<div class="tab-wrapper">
<i>默认</i>
<i>销量</i>
<i>价格 <em></em></i>
</div>
<div class="content">
<ul>
<router-link :to="{path:'../product/productDetail', query: {goodsId:item.id}}"  tag="li"
v-for="(item,index) in product"  :key="index">
<div class="item clearfix">
 <img :src="item.imgUrl"/>
 <div class="li-content">

<p class="name">{{item.name}}</p>
<p class="price"><b>￥68
   <span>6836人付款</span></b></p>
 </div>
   </div>
</router-link>
</ul>
</div>
</div>
</div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
export default {
   name:"product",
   computed:{
   	...mapGetters(["product"])
   },
   methods:{
   	...mapActions(["getProduct"])
   },
   // mounted(){
   // 	 this.getProduct(this.$route.query.ctgyId);
   // },
 
 beforeRouteEnter (to, from, next) {
  next(vm => {
          vm.getProduct(vm.$route.query.ctgyId);
  })
},
beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    	//this.product.set([]);
    	// ...mapGetters(["product"]);
    	
    	next();
  }
    

}
</script>

<style lang="scss" scoped>
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
    background:white;
    line-height: px2rem(32px);
    color:#999999;
    text-align: left;
    padding:0 px2rem(16px);

}

.tab-wrapper{
    position: fixed;
    z-index: 6;
    left: 0;
    top: px2rem(44px);
    width: 100%;
    height: px2rem(44px);
    line-height: px2rem(44px);
    background: #fff;
    /*font-size: 0;*/
    text-align: center;
    border-bottom: .5px solid #e8e8e8;
    color: #858585;
    i{
      display:inline-block;
      width:30%;  
      /*height:100%;*/
      em{
    	display:inline-block;
        vertical-align: middle;
    }
    em:before{
	    content: "";
	    display: block;
	    width: 0;
	    border: px2rem(6px) solid transparent;
	    border-bottom-color: #999;
    }
    em:after{
    	margin-top:px2rem(2px);
    	content: "";
	    display: block;
	    width: 0;
	    border: px2rem(6px) solid transparent;
	    border-top-color: #999;
    }
    }
    i:not(:first-child):before{
    content: "";
    float: left;
    width: 1px;
    height: 22px;
    margin-top: 14px;
    border-left: 1px solid #e0e0e0;
    }
}
.content{
	margin-top:px2rem(88px);
	li{
		margin-left:px2rem(10px);
	 .item{
	 padding: 10px 0;
     background: #fff;
     font-size: 14px;
     color: #33383b;
     width: 100%;
     img{
     	float:left;
     	width:px2rem(90px);
     	height:px2rem(90px);
     }
    .li-content{
     float: left;
    width: 69.6%;
    overflow: hidden;
    padding:10px 0 0 10px;
    .name{
    	color: #000;
    line-height: 20px;
    font-size: px2rem(14px);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-align: left;
    }
    .price{
    	margin-top: px2rem(8px);
    	text-align: left;
    	b{
    		font-weight: 600;
    		font-size:px2rem(16px);
    		span{
    			font-weight: 100;
    			font-size:px2rem(12px);
    			color:#858585;
    			margin-left:px2rem(5px);
    		}
    	}
    }

    }
	 }
    }
	}

</style>