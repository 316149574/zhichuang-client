<template>
  <div class="case-box">
    <div class="dl-container">
      <h3 class="title">服务案例</h3>
      <p class="slogan">佳作源于用心，用心缔造艺术</p>
      <div  ref="tab" class="tab">
          <li @click="handleChangeCase(item.en,index)" v-for="(item,index) in tabInfo" :key="index">
             <a href="###" :class="{active:!index}" >{{item.cn}}</a> <span class="bg"></span>
          </li>
      </div>
      <el-row :gutter="40">
        <el-col :span="8" :xs="12" :sm="12" :md="8" :lg="8" :xl="6" v-for="(item,index) in CaseList" :key="index">
          <div class="item" >
               <div class="img-box"> 
                    <img @click="godetail(item._id)" class="thumbnail" v-lazy="item.thumbnail" alt="">
               </div> 
               <h3 class="name">{{item.name}}</h3>
               <p class="des">{{item.des}}</p>
          </div>
        </el-col>
      </el-row>
      <MoreBtn></MoreBtn>
    </div>
  </div>
</template>
<script>
import MoreBtn from "./MoreBtn.vue";

export default {
  name: "CaseList",
  mounted(){
       this.$api.getCaseList({num:8, page:1}).then((res)=>{
          this.CaseList = res.data;
     })
  },
  components: {
    MoreBtn,
  },
  data() {
    return {
      tabInfo:[
        {
          en:"all",
          cn:"随机案例"
        },
        {
          en:"ui",
          cn:"UI设计"
        },
        {
          en:"web",
          cn:"网站开发"
        },
        {
          en:"ad",
          cn:"广告设计"
        },
        {
          en:"movie",
          cn:"影视制作"
        }
      ],
      CaseList:[]
    };
  },
  methods:{
    godetail(id){
       this.$router.push({
         path:`/cases/${id}`
       })
    },
    handleChangeCase( category,index){
       this.$api.getCaseList({category, num:8, page:1}).then((res)=>{
          this.CaseList = res.data;
      })
      for(var i =0; i<this.$refs.tab.children.length;i++ ){
        this.$refs.tab.children[i].children[0].className = "";
      }
      this.$refs.tab.children[index].children[0].className ='active';
    }
  }
};
</script>
 
<style scoped>

.case-box{
  /* background: #f8f8f8; */
  padding: 50px 0;
}
.case-box .title {
  font-size: 32px;
  text-align: center;
  color: #444;
}
.case-box .slogan {
  color: #adadad;
  text-align: center;
  font-size: 16px;
  text-align: center;
}
.case-box .tab{
  height: 40px;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
}
.case-box .tab li{
  flex: 1;
  height: 40px;
  text-align:center;
  line-height: 40px;
  position: relative;
}
.case-box .tab li a{
  width: 100%;
  height: 40px;
  color: #444;
  display: block;
  position: relative;
  left: 0;
  top: 0;
  z-index: 2;
}
.case-box .tab .bg{
   width: 0px;
   height: 0px;
   position:absolute;
   left: 0;
   top: 0;
   opacity: 0;
   bottom: 0;
   right: 0;
   margin: auto;
   background: #444;
   border-radius: 50%; 
   z-index: 1;
}
.case-box .tab li a:hover{
  color: white;
} 
@media screen and (max-width:768px) {
   .case-box .tab li a{
     font-size: 14px;
   }
}
.case-box .tab li:hover .bg {
   animation: bgmove  0.6s;
   animation-timing-function: linear;
   animation-fill-mode:forwards;
}
.case-box .tab li  .active{
  background: red;
  color: white;
  border-radius: 17px;
}
@keyframes  bgmove {
   0%{
      width: 0;
      height: 0;
      opacity: 0;
   }
   30%{
       width:40px;
       height: 40px;
       opacity: 1;
   }
   100%{
     border-radius: 17px;
     width: 100%;
     height: 100%;
     opacity: 1;

   }
}
.item{
   
   margin-top: 30px;
   /* border-radius: 10px; */
}
.item .thumbnail{
  width: 100%;
  border-radius: 10px;
  transition: 0.5s;


}

.item .thumbnail:hover{
    box-shadow: 0 10px 40px 10px rgba(200, 200, 200, 0.8);
}
.item .name{
  font-size: 16px;
  color: #444;
  margin:10px 0px 0px 0;
}
.item .des{
  font-size: 14px;
  color: #666;
  overflow: hidden;
   text-overflow: ellipsis;
   -webkit-line-clamp: 1;
   display: -webkit-box;
   -webkit-box-orient: vertical;
}
</style>