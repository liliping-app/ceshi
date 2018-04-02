<template>
  <div id="app">
    <!-- <img src="//vuejs.org/images/logo.png"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style lang="less">
@bi: 75rem; 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  /*color: #444;*/
  width: 750/@bi;
  background: #110903;
  min-height: 1500/@bi;
  margin: 0 auto;
}
img {
    border: 0 none;
}
a{text-decoration: none;}
body{
  background: #110903;
}
body,p,img,div,ul,li,a{
  padding:0;
  margin: 0;
}
.clearfix{zoom:1;}
.clearfix:before,.clearfix:after{content:'';display:table;}
.clearfix:after{clear:both;}
</style>
