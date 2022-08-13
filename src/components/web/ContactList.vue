<template>
  <div class="contact">
    <div class="dl-container">
      <h3 class="title">开启我们的创作之旅吧</h3>
      <p class="slogan">
        我们深知创业艰难，守业更难，一个容易让意向客户一秒铭记品牌的官网，助您企业上升，一个视觉美观的官网，能够在竞价推广时在众多网站中脱颖而出，一个便于优化和更新的官网，能为您省下资金做更有用的事；一次试用，能让未来的您，感激现在自己的决定
      </p>
      <el-button
        class="contact-btn"
        type="primary"
        style="margin-left: 16px"
        @click="drawer = true"
      >
        <i class="icon iconfont icon-liuyanguanli btn-icon"></i>
        点击留言
      </el-button>

      <el-drawer
        v-model="drawer"
        direction="btt"
        size="70%"
        :show-close="true"
        :with-header="false"
        
      >
        <i class="close-btn icon iconfont icon-guanbianniu" @click="close"></i>
        
        <MessageList :companyinfo="companyinfo"></MessageList>
        
      </el-drawer>
    </div>
  </div>
</template>

<script>
import MessageList from './MessageList.vue'
export default {
  name: "ContactList",
  props:[
    "companyinfo"
  ],
  data() {
    return {
      drawer: false,
     
    };
  },
  methods: {
    close() {
      this.drawer = false;
    },
  },
  components: {MessageList},
};
</script>

<style scoped>

::v-deep(.el-drawer .el-drawer__body ) {
  overflow:scroll;
  padding: 0 15px;
}


.close-btn {
  position: absolute;
  z-index: 100;
  font-size: 30px;
  right: 10px;
  top: 10px;
  color: red;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 10px 0 rgba(200,200,200, 0.5);
}
.contact {
  height: 550px;
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: bgmove 8s linear 3s forwards infinite;
  background-size: 400%;
  padding: 80px 0;
  color: white;
  text-align: center;
}
.contact-btn {
  width: 350px;
  height: 50px;
  color: white;
  font-size: 20px;
  background: red;
  box-shadow: 0px 3px 0 0 #b00000;
  border: none;
  border-radius: 25px;
  margin-top: 80px;
  animation: btnmove 2s infinite;
}
.contact-btn:hover{
  background:red;
}
.btn-icon {
  font-size: 25px;
  font-weight: bold;
  vertical-align: middle;
}
@keyframes btnmove {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}
.title {
  font-size: 40px;
  text-align: center;
  line-height: 40px;
}

.slogan {
  margin-top: 40px;
  font-size: 16px;
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
</style>


