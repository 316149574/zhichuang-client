<template>
    <swiper
   
    :modules="modules"
    :slides-per-view="1"
    :autoplay="false"
    :delay="3000"
    :pauseOnMouseEnter="true"
     navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide :style="{ backgroundImage:bgcolor[index]}" v-for="(item,index) in bannerList" :key="item._id">
       <div class="dl-container">
         <div class="banner-img">
           <img  :src="item.bannerurl" alt=""/>
         </div>
         <div class="info">
            <h3 class="title">{{item.title}}</h3>
            <p class="des">{{item.des}}</p>
         </div>
       </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination,Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
  name: "BannerList",
  components:{
   Swiper,
   SwiperSlide
  },
  mounted() {
      this.$api.getBannerList().then((res)=>{
        this.bannerList = res.data
      });
  },
  data() {
    return {
      bannerList: [],
      modules: [Navigation, Pagination,Autoplay]
    };
  },
  computed:{
    bgcolor(){
       var bgs=[];
       this.bannerList.forEach((item)=>{
        
         if( item.bgcolor.includes("|") ){
            var  color_str = item.bgcolor.split('|').join(',');
            bgs.push( `linear-gradient(90deg,${color_str})` )
         }else{
           bgs.push( `linear-gradient(90deg,${item.bgcolor},${item.bgcolor})` )
         }
       });
       
      return  bgs;
    }
  }
};
</script>

<style scoped>
.swiper {
  margin-top: 60px;

}
 .swiper >>> .swiper-button-prev{
  background: rgba(255,255,255, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 14px;
  color: red ;
}
.swiper >>> .swiper-button-prev::after{
  font-size: 20px;
}
.swiper >>> .swiper-button-next{
  background: rgba(255,255,255, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 14px;
  color: red ;
}
.swiper >>> .swiper-button-next::after{
  font-size: 20px;
}
.swiper-slide .dl-container{
  display: flex;
  padding: 0 30px 50px;
  justify-content: center;
  
}
.swiper-slide .dl-container .info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex:1;
  color:white;
  margin-left: 10px;

}
.swiper-slide .dl-container .info .title{
   font-size:40px;
   font-weight: bold;
   margin-bottom: 20px;
 
}
.swiper-slide .dl-container .info .des{
  font-size: 30px;

}
.dl-container .banner-img {
  text-align:center;
  flex: 1;
}
 .dl-container .banner-img img{
   max-width: 2200px;
   width:100%;
 }

 @media screen  and (max-width:767px) {
   .swiper-slide .dl-container{
       padding: 0 30px 30px;
      }
     .dl-container .banner-img img{
      width:100%;
     } 
     .swiper-slide .dl-container .info .title{
       font-size: 24px;
       margin-bottom: 0px;
     }
     .swiper-slide .dl-container .info .des{
       font-size: 16px;
     }
 }
 @media screen  and (min-width:768px) {
   
  .swiper{
    margin-top:80px;
  }
}
@media screen  and (min-width:992px) {
.swiper{
    margin-top:100px;
  }
}

</style>