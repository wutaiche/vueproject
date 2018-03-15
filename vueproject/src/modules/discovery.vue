<template>
<div>
<dsh-head>
<p class="dis-head"> 发现 </p>
</dsh-head>
<div class="dis-wrap">
<ul>
<li v-for="(ele,index) in discovery" :key="index">
<div class="top-wrapper">
  <img :src="ele.tpcauthor.headpic"/>  <p> <span  class="name">{{ele.tpcauthor.nickname}} </span> 
  <span class="time">{{ele.uptime}} </span>   </p>

</div>
<h2><span class="notice-tip"> {{ele.title}}  </span></h2>
 <p class="recommended-content"> {{ele.content}}  </p>
</li>

</ul>


</div>

</div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
export default{
	name:"Discovery",
	computed:{
		...mapGetters(["discovery"])
	},
	methods:{
		...mapActions(["getDiscovery"])
	},
	mounted(){
		this.getDiscovery();
	}
}
</script>
<style  lang="scss">
.dis-head{
	color:white;
	font-weight: 600;
	line-height: px2rem(44px);
}
.dis-wrap{
	margin-top: px2rem(44px);
	li{
		padding:px2rem(12px) px2rem(12px) 0 px2rem(12px);
		margin-bottom:px2rem(12px);
        text-align: left;
		.top-wrapper{
			
			height:px2rem(48px);
			img{
				border-radius: 50%;
				height:px2rem(48px);
				width:px2rem(48px);
				float:left;
			}
			 p{
			 	float:left;
			 	margin-left:px2rem(10px);
			 	/*color:red;*/
			 	span.time{
			 		font-size:px2rem(10px);
			 	}
			 	span{
			 		line-height: px2rem(24px);
			 		display:block;
			 		/*color:red;*/
			 	}
			 }

			
		}
		  h2{
		  	margin-top:px2rem(10px);
	.notice-tip{
	font-size: px2rem(12px);
    line-height: px2rem(20px);
    color: red;
    padding: 0 px2rem(4px);
    border: 1px solid red;
    margin: 2px 4px 0 0;
    /*float: left;*/
    text-align: center;
    overflow: hidden;
		  	}
		  }
		p.recommended-content{
			margin-top: px2rem(6px);
           color: #4d4d4d;
           width: 100%;
           word-wrap: break-word;
           overflow: hidden;
           line-height: 20px;
           font-size: px2rem(14px);
		}
	}
}

</style>