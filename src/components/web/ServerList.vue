<template>
      <div class="wrap">
        <div class="dl-container">
            <h3 class="title">服务项目</h3>
            <p class="slogan">我们擅长什么？</p>
            <el-row class="list" :gutter="20">
              <el-col  :span="6" :xs="12" :sm="12" :md="6" :lg="6" v-for="item in servers" :key= "item._id">
                     <div class="item">
                        <img class="icon" v-lazy="item.icon" alt="">  
                        <h4 class="name">{{item.name}}</h4> 
                        <ul class="sub">
                          <li v-for="(sub,index) in item.content.split('|')" :key="index">
                             {{sub}}
                          </li>
                        </ul>  
                     </div>   
              </el-col> 
            </el-row> 
      </div>
      <MoreBtn></MoreBtn>
      </div>
</template>
<script>
import MoreBtn from './MoreBtn.vue';

export default {
  name: "ServerList",
  props:['servers'],
  components:{
   MoreBtn
  },
  data() {
    return {
     
    };
  }
};
</script>
 
<style scoped>
 .wrap{
    /* background: rgb(250,250,250); */
    background: url(../../assets/images/service_bg.jpg) center fixed;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    overflow: hidden;
    padding-bottom: 30px;

 }
 .wrap .dl-container .title{
   text-align: center;
   font-size: 32px;
   color: #444;
   margin-top: 30px;
 }
 .wrap .dl-container .slogan{
    font-size: 16px;
    color: #ADADAD;
    text-align: center;
 }
 .wrap .list{
   margin-top: 30px;
 }
  .wrap .list .item{
      margin-top: 20px;
      padding: 40px 0;
      background: rgba(255,255,255, 0.9);
      border-radius: 10px;
      text-align:center;
      
      transition:box-shadow 0.5s;
  }
  .wrap .list .item:hover{
     box-shadow: 0px 0px 30px 0px rgba(230,230,230);
      color: rgb(220,0,0);
  }
   .wrap .list .item .name{
     font-size: 20px;
     margin:20px 0;
     font-weight: 900;
     transition: 0.5s;
   }
 .wrap .dl-container .icon{
   width: 80px;
 }
 .wrap .list .sub li{
   height: 26px;
   line-height: 26px;
   transition: 0.5s;
 
 }
 @media screen and (max-width:768px) {
   .wrap .dl-container .icon{
     width: 60px;
   }
    .wrap .list .item .name{
       margin: 10px 0;
       font-size: 16px;
    } 
    .wrap .list .item{
      padding: 10px 0;
    }
     .wrap .list .sub li{
       font-size: 14px;
       line-height: 18px;
     }
 }
</style>