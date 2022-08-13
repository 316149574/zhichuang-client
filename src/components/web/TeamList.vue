<template>
  <div class="team-box">
    <h3 class="title">智创团队</h3>
    <p class="slogan">佳作源于用心，用心缔造艺术</p>
    <swiper
      class="swiper-list"
      :modules="modules"
      :slides-per-view="2"
      :space-between="15"
      :loop="true"
      :pauseOnMouseEnter="true"
      :initialSlide="1"
      :centeredSlides="true"
      :centeredSlidesBounds="true"
      :autoplay="true"
      :delay="3000"
      :pagination="{ clickable: true }"
    >
      <swiper-slide class="item" v-for="(item, index) in teams" :key="index">
        <div class="content">
          <img class="thumbnail" v-lazy="item.thumbnail" alt="" />
          <div class="info">
            <h3 class="name">{{ item.name }}</h3>
            <h3 class="position">{{ item.position }}</h3>
            <div class="experience-box">
               <p class="experience">{{ item.experience }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <MoreBtn></MoreBtn>
  </div>
</template>
<script>
import MoreBtn from "./MoreBtn.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {Pagination,Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "TeamList",
  props: ["teams"],
  components: {
    MoreBtn,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination,Autoplay ],
    };
  },
};
</script>
 
<style scoped>
.team-box .title {
  font-size: 32px;
  text-align: center;
  color: #444;
}
.team-box .slogan {
  color: #adadad;
  text-align: center;
  font-size: 16px;
  text-align: center;
}
.team-box {
  padding: 50px 0;
  background: white;
}

.swiper-list {
  padding: 50px 0;
  margin-top: 30px;
}
.item {
  margin-bottom: 30px;
}
.item .content {
  padding: 40px;
  background: white;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 40px 10px rgba(240, 240, 240, 1);
  transition: 0.5s;
  display: flex;
  flex-direction: row;
}
.item .content:hover{
    box-shadow: 0 0 40px 10px rgba(220, 220, 220, 1);
}
.item .thumbnail {
  width: 120px;
  border: 1px solid #ccc;
  height: 120px;
  border-radius: 50%;
  margin-right: 20px;
}
.item  .info{
  flex: 1;
}
.item  .info .name{
   font-size: 24px;
   font-weight: 100;
}
.item  .info .position{
  color: #444;
  font-size: 16px;
}
.item .info .experience-box{
   height: 220px;
   /* white-space: nowrap; */
   overflow: hidden;
   text-overflow: ellipsis;
   -webkit-line-clamp: 7;
   display: -webkit-box;
   -webkit-box-orient: vertical;
}
.item  .info .experience{
  font-size: 16px;
  line-height: 28px;
  color: #444;
  margin-top: 20px;
}
@media screen  and (max-width:768px) {
   .item .content{
     flex-direction: column;
     align-items: center;
     padding: 15px;
   }
   .item .thumbnail{
     margin-right: 0;
     width:100px;
     height: 100px;
     margin-bottom: 10px;
   }
   .item  .info .name{
    text-align: center;
   font-size: 18px;
   font-weight: 100;
  }
  .item  .info .position{
    text-align:center;
   color: #444;
   font-size: 14px;
  }
  .item  .info .experience{
    font-size: 12px;
    line-height: 16px;
  }
  .item .info .experience-box{
       height: 150px;
      -webkit-line-clamp: 4;
  }
  
}



</style>