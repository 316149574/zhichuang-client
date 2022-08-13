<template>
  <div class="welcome">
       <div class="content">
           <div class="title">欢迎使用</div>
           <div class="name">智创广告后台管理系统</div>
           <div class="idea">佳作源于用心，用心缔造艺术</div>
       </div>
       <img  class="welcome—pic" src="../../assets/images/welcome.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

 .welcome{
     height: 100%;
     display: flex;
     justify-content: space-around;
     flex-direction: row;
     align-items:center;

 }
.title{
    font-size: 30px;
    font-weight: 800;
}
.content{
    height: 250px;
}
.name{
    font-size: 40px;
    letter-spacing: 0.1em;
    color:#3e6fb9;
    font-weight: 800;
}
.idea{
    margin-top: 10px;
    float: right;
}
.welcome—pic{
    width: 460px;
}
</style>