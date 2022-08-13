<template>
      <div class="dl-container">
          <div class="wrap">
               <div class="item">
                    <div class="number">{{about.experience}} <span>年</span> </div>
                    <div class="des">专业年限</div>
               </div>
               <div class="item">
                    <div class="number">{{about.successcase}} <span>个</span> </div>
                    <div class="des">成功案例</div>
               </div>
               <div class="item">
                    <div class="number">{{about.teamnumber}} <span>人</span> </div>
                    <div class="des">项目团队</div>
               </div>
               <div class="item">
                    <div class="number">{{about.top}} <span>排名</span> </div>
                    <div class="des">口碑品质</div>
               </div>
          </div>
          <h3 class="title">关于智创</h3>
          <p class="idea">{{about.idea}}</p>
          <h4 class="slogan">{{about.slogan}}</h4>
          <p class="dev">{{about.dev}}</p>
          <p class="introduce">{{about.introduce}}</p>
          <MoreBtn></MoreBtn>
          
      </div>
</template>
<script>
import MoreBtn from './MoreBtn.vue';

export default {
  name: "AboutList",
  props:['about'],
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
  .dl-container{
    position: relative;
    top: -50px;
    z-index: 100000;
  }
  .dl-container .wrap{
     height: 100px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(200,200,200,0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .dl-container .wrap .item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #666;
  }
  .dl-container .wrap .number{
    font-weight: bolder;
    font-size: 50px;

  }
  .dl-container .wrap .des{
    font-size: 16px;
  }
  .dl-container .wrap .number span{
    font-size: 14px;
  }
  
  .dl-container .title{
    margin-top: 50px;
    font-size: 32px;
    text-align: center;
    color: #444;
  }
  .dl-container .idea{
    color: #ADADAD;
    text-align: center;
    font-size: 16px;
  }
  .dl-container .slogan{
    font-size: 22px;
    color: #444;
    text-align: center;
    margin: 30px  0px 15px;
  }
   .dl-container .dev,  .dl-container .introduce{
     font-size: 16px;
     color: #444;
     line-height: 30px;
   }
  @media screen  and (max-width:767px) {
       .dl-container{
          top: -30px;
       }
       .dl-container .wrap{
         height: 60px;
       }
       .dl-container .wrap .number{
         font-size: 24px;
       }
       .dl-container .wrap .des{
         font-size:14px;
      }
 }


</style>