<template>
  <div class="brand">
    <div class="dl-container">
      <h3 class="title">佳作源于用心，用心缔造艺术</h3>
      <p class="slogan">
        您的需要是我们的工作，您的满意是我们的快乐，您的夸奖是我们的荣誉！我们把每一个项目都当做艺术品在做。
      </p>
      <MoreBtn></MoreBtn>
    </div>
  </div>
</template>

<script>
 import MoreBtn from './MoreBtn.vue'
export default {
  name: "BrandList",
  
  data() {
    return {
  
     
    };
  },
  components:{
    MoreBtn
  }
};
</script>

<style scoped>


.brand {
  height: 350px;
  background-image: linear-gradient(-45deg, #ee6452, #e73c7e, #23a6d5, #7923d5);
  animation: bgmove 8s linear 3s forwards infinite;
  background-size: 400%;
  padding: 80px 0;
  color: white;
  text-align: center;
  margin-top: 60px;
}

.title {
  font-size: 40px;
  text-align: center;
  line-height: 40px;
}

.slogan {
  margin-top: 40px;
  font-size: 20px;
  line-height: 30px;
}

@keyframes bgmove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

 @media screen  and (min-width:768px) {
   
  .brand{
    margin-top:80px;
  }
}
@media screen  and (min-width:992px) {
.brand{
    margin-top:100px;
  }
}
</style>


