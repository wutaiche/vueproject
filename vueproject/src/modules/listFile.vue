<template>
	<div>
		<div class="list-header">
			<i class="fa fa-angle-left" @click="$router.go(-1)"></i>
			<span>{{$route.query.title}}</span>
			<i class="fa fa-share-square-o"></i>
		</div>
		
		
		<div class="list-main">
			<div v-for="item in list" class="cctw">
				<img width="100%" :src="item"/> 
			</div>
			<div class="logos">
				<p v-for="item in logo"><img width="100%" :src="item"/></p>
				<p v-for="item in title">{{item}}</p>
			</div>
			<div class="commodity">
			<router-link :to="{path:'../product/productDetail', query: {goodsId:item.goodsId}}"  tag="dl"
                v-for = "(item,index) in commodoty" :key="index" >
				
					<dt><img width="100%" :src="item.img"/></dt>
					<dd>{{item.goods.name}}</dd>
					<b class="id">
						￥{{item.goods.marketPrice/100}}
						<span>{{item.goods.salesVolume}}人付款</span>
					</b>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				list:[],
				logo:[],
				title:[],
				commodoty:[]
			}
		},
		methods:{
			//http://www.dshui.cc/adwap/queryAdGoods?adid=60064&pageNo=1
			getList(){
				axios.get('/adwap/loadAd?adid='+this.$route.query.id)
				.then((res)=>{
					this.list.push(res.data.data.img); 
					this.logo.push(res.data.data.logo);
					this.title.push(res.data.data.summary);
				})
			},
			getCommodity(){
				axios.get('/adwap/queryAdGoods?adid='+this.$route.query.id+'&pageNo=1')
				.then((res)=>{
					//console.log(res.data.data.img);
					this.commodoty = res.data.data
				})
			}
		},
	
		beforeRouteEnter (to, from, next) {
         next(vm => {
          vm.getList();
          vm.getCommodity();
           window.scrollTo(0, 0);

         
        })
    },
    beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    	//this.product.set([]);
    	// ...mapGetters(["product"]);
    	this.list=[];
    	this.logo=[];
    	this.title=[];
    	this.commodity=[];
    	next();
  }
    
	}
</script>

<style lang="scss" scoped>
	

.list-header{
		width: 100%;
		height:px2rem(44px);
		background: #000;
		color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.fa-angle-left{
			display: block;
			color: #f8f4f1;
			font-size:px2rem(45px);
			margin-left: px2rem(10px);
		}
		span{
			font-size: px2rem(16px);
		}
		.fa-share-square-o{
			display: block;
			color: #f8f4f1;
			font-size:px2rem(27px);
			margin-right: px2rem(10px);
		}
	}
	
	.list-main{
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.cctw{
			width:100%;
			height: px2rem(203px);
			display: flex;
		}
		.logos{
			flex: 2;
			width:100%;
			height: px2rem(120px);
			background: #fff;
			margin-top:px2rem(10px) ;
			display:flex;
			align-items: center;
			text-align: left;
			img{
				
				width: px2rem(60px);
				height: px2rem(85px);
				margin: 0 px2rem(10px);
			}
			 p:nth-child(2){
				width: px2rem(272px);
				height: px2rem(120px);
				padding: px2rem(5px);
			}	
		}
		.commodity{
			width:100% ;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			box-sizing: border-box;
			padding: px2rem(10px) px2rem(8px);
			dl{
				width:  px2rem(150px);
				height: px2rem(267px);
				margin-bottom: px2rem(8px);
				background: #FFFFFF;
				dt{
					width:100%;
					height:px2rem(169px);
					img{
						height: 100%;
					}
				}
				dd{
					margin: 0 px2rem(5px);
					width:100%;
					/*height: px2rem(46px);*/
					font-size:px2rem(16px) ;
					margin-bottom: px2rem(22px);
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
    				overflow: hidden;
				}
				.id{
					font-size:px2rem(20px);
					font-weight: 600;
					color: #000;
					margin-left: px2rem(10px);
					span{
						display: inline-block;
						font-size: px2rem(12px);
						font-weight:100 ;
						margin-left: px2rem(10px);
					}
				}
			}
				
			
		}
	}
	 .footer{display:none;}
</style>