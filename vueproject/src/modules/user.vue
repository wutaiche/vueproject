<template>
<div>
<dsh-head>
<i @click="$router.go(-1)"  class="fa fa-angle-left back"></i>
<span class="title">快速登录</span>
</dsh-head>
<ul class="input-wraper">
<li  class="mb-20">
<input  type="phone" placeholder="手机号" maxlength="11" > </li> 
<li class="mb-20"><input  type="password" placeholder="密码" maxlength="16" > 
</li></ul>
<div class="btn-login"><!---->登录</div>
<div class="action-wrapper clearfix"><span  class="goRegister fl">注册</span> <span class="forgot-pwd fr">忘记密码</span></div>
</div>
</template>

<script>
export default {
  name:"user"

}

</script>

<style lang="scss" scoped>
  .back {
  	line-height: px2rem(44px);
  	color:white;
  	font-size: px2rem(24px);
  	float: left;
  	margin-left:px2rem(16px);
  }
  .title{
  	line-height: px2rem(44px);
  	color:white;
  	font-size: px2rem(18px);
  }
  .input-wraper{
  	margin-top: px2rem(100px);
  	padding:0 px2rem(20px);
  	.mb-20{
    width: 100%;
    height: 50px;
    padding: 0 px2rem(12px);
    box-sizing: border-box;
    border: 1px solid #000;
    margin-top: 1rem;
   input{
   	width: 100%;
    height: 100%;
    padding: 0 px2rem(12px);
    border: none;
    vertical-align: middle;
   }
  	}
  }
  .btn-login{
  	margin-left: px2rem(16px);
  	margin-top:px2rem(30px);
  	width: 90%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background: #000;
    border-radius: 3px;
  }
  .action-wrapper{
  	height:50px;
  	line-height: 50px;
  	width:90%;
  	margin-left: px2rem(16px);
  }
</style>