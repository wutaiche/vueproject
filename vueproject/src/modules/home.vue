<template>
<div>

<dsh-head>
<ul class="search"> 
     <li class="user"><i class="fa fa-user-o"></i></li>
     <li class="input"> <i class="fa fa-search"></i>  搜索你喜欢的宝贝 </li>
     <li class="mes">注册</li>
</ul>

</dsh-head>
 <dshui-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="listAllLoaded" ref="loadmore">
<div class="wraper">
<div class="swip-wraper">
<dshui-swip :auto="4000">
<dshui-swip-item  v-for ="img in imgs" >
<img  class="head-img" :src="img.img"/>
</dshui-swip-item>
</dshui-swip>

</div>
<div class="notice">
<img src="../assets/img/notice.png">
<p>女神节 | 做最美的自己</p>
</div>
<div  class="option-wraper">
   <ul>
   <li>
   <i class="fa fa-th-large"></i>
   <p>  全部 </p>
   </li>
   <li>
   <i class="fa fa-heart"></i>
   <p>  新品 </p>
   </li>
   <li>
   <i class="fa fa-gift"></i>
   <p>  清货 </p>
   </li>
   <li>
   <i class="fa fa-envelope-open"></i>
   <p>  回馈 </p>
   </li>
   <li>
   <i class="fa fa-institution"></i>
   <p>  付邮 </p>
   </li>
   </ul>
</div>
<div class="activity-wraper">
<img src= "../assets/img/new_new_man.jpg"/>
</div>
<div class="activity2-wraper">
<p  v-for="(item,index) in activityDate"  v-if="index<3">
 <img :src = "item.img"/>
</p>
</div>
<div class="new-goods-wraper">
  <ul>
  <li v-for="(item,index) in activityDate" v-if="index>2">
  <p class="new-goods-title">{{item.title}}</p>
  <p class="new-goods-subtitle">{{item.subtitle}}</p>
  <img  v-lazy="item.img">
  </li>
  </ul>
</div>

<div class="hot-sell-warper">
  <p class="hot-sell-title">超值热卖</p>
 
  <ul>
  <li v-for = "item in hotSellDate"  >
  <img  v-lazy="item.img"/>
 <p class="new-goods-title">{{item.title}}</p>
  <p class="new-goods-subtitle">{{item.subtitle}}</p>
  </li>
  </ul>
 
</div>

</div>
</dshui-loadmore>
</div>
</template>
<script>
import{mapGetters,mapActions} from "vuex"
export  default {
	name:"Home",
  data:function(){
      return {
        // allLoaded:false,
        page:1
      }
    },
	computed:{
		...mapGetters(["imgs","activityDate","hotSellDate","listAllLoaded"])
		
	},
	methods:{
		...mapActions(["getHeadImg","getActivity","getHotSell"]),
    loadTop(){
       this.page=1;
       // this.allLoaded=false;
        this.getHotSell({page:this.page,
          callback:()=>{
          this.$refs.loadmore.onTopLoaded();

        }});


    },
    loadBottom(){
      this.page++;
      this.getHotSell({page:this.page,
        callback:()=>{
          this.$refs.loadmore.onBottomLoaded();
        }
      })

    }
	},
	mounted(){
		this.getHeadImg();
    this.getActivity();
    this.getHotSell({page:this.page});
	}

}

</script>
<style lang="scss" scoped>
ul.search{
   display:flex;
   align-items: center;
}
li.user,li.mes{
	width:16%;
	line-height: px2rem(44px);
	height:px2rem(44px);
	color:white;
  text-align: center;
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
.wraper{
  margin-top:px2rem(44px);
  margin-bottom:px2rem(44px);
	background:#f0f0f0;
  flex:1;
  overflow-y: auto;
}
.head-img{
	width: 100%;
}
.swip-wraper{
	height:px2rem(180px);
}
.notice{
	background:white;
	height:px2rem(40px);
	display:flex;
	align-self: center;
	p{
	  margin-left:px2rem(10px);
	  font-size: px2rem(12px);
	  line-height: px2rem(40px);
	}
}
.option-wraper{
	margin-top:px2rem(12px);
	background:white;
	padding:px2rem(10px) 0;
    ul{
    	display:flex;
    	li{

    		flex:1;
    		i{ 
         
    			font-size:px2rem(36px);
          width:px2rem(42px);
          height:px2rem(42px);
    			padding:px2rem(5px);
    		}
    		
    		p{  margin-top:px2rem(6px);
    			font-size:px2rem(13px);}
    	}
    }
}
.activity-wraper{
  margin-top:px2rem(12px);
  /*height:px2rem(100px);*/
 img{
   width:100%;
 }

}
.activity2-wraper{
   margin-top: px2rem(12px);
   /*height:px2rem(120px);*/
   display:flex;
   p{
    flex:1;
    img{
      width:100%;
    }
   }
}
.new-goods-wraper{
  margin-top:px2rem(12px);
  padding:px2rem(12px) 0;
  background:white;
  li{
    padding:0 px2rem(12px);
   
    img{
      width:100%;
    }
  }
  li:not(:first-child){
    margin-top:px2rem(18px);
    padding:px2rem(12px) px2rem(12px) 0;
    border-top: px2rem(1px) solid #e0e0e0;
  }
}

.hot-sell-warper{
  margin-top:px2rem(12px);
  padding-top:px2rem(22px);
  background:white;
  .hot-sell-title{
    font-size: px2rem(24px);
    margin-bottom: px2rem(24px);
    height:px2rem(32px);
    line-height: px2rem(32px);
  }
  li{
    padding:0 px2rem(12px);
    img{
      width:100%;
      margin-bottom:px2rem(12px);
    }
  }
   li:not(:first-child){
    margin-top:px2rem(18px);
    padding:px2rem(12px) px2rem(12px) 0;
    border-top: px2rem(1px) solid #e0e0e0;
  }
}

 .new-goods-title{
      text-align: left;
      font-weight: 700;
      height:px2rem(25px);
      line-height: px2rem(25px);
    }
    .new-goods-subtitle{
      text-align:left;
      margin-bottom:px2rem(10px);
      color: #888;

    }
</style>