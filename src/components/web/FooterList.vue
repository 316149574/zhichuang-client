<template>
  <div class="footer">
    <div class="dl-container">
      <el-row>
        
         <el-col class="contact-info" :span="12" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-tooltip placement="top" effect="light">
            <template #content>
              <img width="100" class="logo" v-lazy="companyinfo.wechat"
            /></template>
            <el-button class="wechat-icon icon"></el-button>
          </el-tooltip>
          <el-tooltip placement="top" effect="light">
            <template #content>
              <div class="qq-box">
                <a target=blank href="tencent://message/?uin=19012188&Site=www.zhichuang.team&Menu=yes">
                <img  border="0" SRC="http://wpa.qq.com/pa?p=1:19012188:9" alt="有事儿您Q我"></a>
                <a target=blank href="tencent://message/?uin=651231672&Site=www.zhichuang.team&Menu=yes">
                <img  border="0" SRC="http://wpa.qq.com/pa?p=1:651231672:9" alt="有事儿您Q我"></a>
                <a target=blank href="tencent://message/?uin=316149576&Site=www.zhichuang.team&Menu=yes">
                <img border="0" SRC="http://wpa.qq.com/pa?p=1:316149576:9" alt="有事儿您Q我"></a>
              </div>
            </template>
            <el-button class="qq-icon icon"></el-button>
          </el-tooltip>
           <div class="number info">
             <p class="contact-name"> 品牌顾问热线(段先生)</p>
             {{ companyinfo.contacts }}
           </div>
        </el-col>
        <el-col :span="12" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <!-- <img width="200" class="logo" :src="companyinfo.logo"/> -->
          <h3 class="name">{{ companyinfo.name }}</h3>
          <p class="address info">公司地址: {{ companyinfo.address }}</p>
          <p class="copyright info">网站备案: {{ companyinfo.copyright }}</p>
        
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterList",
  props: ["companyinfo"],
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.footer {
  padding: 50px 0;
  background: #f8f8f8;

}
@media screen and (max-width:768px) {
  .footer {
  text-align: center;
   }
}
.footer .name {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}
.el-row{
  margin-top: 20px;
}
.footer .info {
  font-size: 14px;
  color: #333;
  line-height: 24px;
}

.icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 30px;
}
.icon:hover{
  transform: scale(1.1);
}
.wechat-icon {
  background: url("../../assets/images/wechat_icon.png");
  background-size: cover;
}
.qq-box, .tel-box{
  width: 100px;
  height: 100px;
}
.qq-box{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.qq-icon {
  background: url("../../assets/images/qq.png");
  background-size: cover;
}
.tel-icon {
  background: url("../../assets/images/tel.png");
  background-size: cover;
}
.footer  .number{
  font-size: 26px;
  color: #333;
  margin-top: 15px;
  font-weight: bolder;
}
.footer .contact-name{
  font-size:16px;
}

</style>


