<template>
  <div id="app">
    
    <keep-alive><router-view></router-view></keep-alive>
    <div class="footer">
   <router-link to="/" active-class="active"  exact><i class="fa fa-home"></i></router-link>
   <router-link to="/category" active-class="active" ><i class="fa fa-th-large"></i></router-link>
   <router-link to="/discovery" active-class="active" ><i class="fa fa-columns"></i></router-link>
   <router-link to="/cart" active-class="active" ><i class="fa fa-shopping-cart"></i></router-link>
   <router-link to="/user" active-class="active" ><i class="fa fa-user-o"></i></router-link>
    </div>
  </div>
</template>

<script>
import Head from "./components/Head"
export default {
  name: 'App',
  components:{
    Head
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:px2rem(16px);
  height:100%;
}

body,html {
  height:100%;
  
}
.footer{
  height:px2rem(44px);
  background:black;
  color:white;
  display:flex;
  position:fixed;
  width:100%;
  bottom:0;
  left:0;
  a{
    display:flex;
    flex:1;
    align-items:center;
    justify-content: center;
    color:white;
    text-decoration: none;
    i{
      /*color:white;*/
      /*display:block;*/
      
      width:px2rem(23px);
      height:px2rem(46px);
      font-size:px2rem(23px);
      line-height: px2rem(44px);
    }

  }

.active{
    
    color:#09bb07;
    
}

}


</style>
