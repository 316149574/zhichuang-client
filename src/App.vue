<template>
  <router-view></router-view>
</template>

<script>
export default {
  mounted: function() {
   
  }
}
</script>

<style>
*{ margin: 0; padding: 0; box-sizing: border-box; }
li{ list-style:none;}
a{ text-decoration: none; color: black;}
html,body{
   height: 100%;
   /* font-family: MONTSERRAT-LIGHT,微软雅黑; */
   font-family: "Microsoft YaHei", "Helvetica Neue", Tahoma, Arial, 微软雅黑, 宋体, 黑体;
}

::selection {
   color: white;
   background-color: rgb(220,0,0);
}
/* 
  公共样式
*/
.dl-container{
     width: 100%;
     padding: 0 15px;
     margin: 0 auto;
}

@media screen  and (min-width:768px) {
   .dl-container{
     width: 750px;
   }
  
}
@media screen  and (min-width:992px) {

   .dl-container{
     width:970px;
   }
}
@media screen  and (min-width:1200px) {
   .dl-container{
     width:1170px;
   }
}

/* .fl{
  float: left;
}
.fr{
  float: right;
}
.clearfix:after{
   content: "";
   display: block;
   height: 0;
   clear: both;
   visibility: hidden;
} */

</style>
