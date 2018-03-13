<template>  
<div class="dsh-head">
  <slot> </slot>
 
  </div>
</template>

<script>
export default {
 name:"dshHead"


}

</script>

<style lang="scss">
  .dsh-head{
  	height:px2rem(44px);
  	background:#010101;
  	position:fixed;
  	width:100%;
  	top:0;
  	left:0;
  	z-index:999999;
  }


</style>