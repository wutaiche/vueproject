<template>
<div>
<dsh-head>
			<span class="cart">购物车</span>
			<i  class="fa fa-trash delete"></i>
</dsh-head>
<div class="content">
<ul>
<router-link :to="{path:'../product/productDetail', query: {goodsId:item.id}}"  tag="li"  
           v-for="item in cart " :key="item.id">
{{item.name}}
{{item.price | price}}
<div class="num">
数量：{{item.num}}
</div>
</router-link>
</ul>
</div>
</div>
</template>

<script>

export default {
	filters: {
  price: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.slice(0,-2) +"."+value.slice(-2)
  }
},
	name:"cart",
	computed:{
		cart(){return this.$store.state.detail.cart;}
	},
	mounted(){
		console.log(this.cart);
	}
}

</script>

<style lang="scss" scoped>
.cart{
	line-height:px2rem(44px);
	color:white;

   
}
.delete{
	float:right;
	line-height:px2rem(44px);
	color:white;
	margin-right: 10px;
}
.content{
	margin-top: px2rem(44px);
	li{
		padding:px2rem(5px) px2rem(20px);
		text-align: left;
		.num{
			text-align:right;
			margin-top: px2rem(10px);
			padding-right:px2rem(10px);
		}
	}
}


</style>