<template>
  <div class="dl-container">
    <el-row :gutter="30">
      <el-col :span="12"  :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h3 class="message-title">提交您的项目需求信息</h3>
        <el-form
          ref="messageForm"
          :model="MessageInfo"
        > 
          <el-form-item  prop="name">
            <el-input placeholder="姓名" v-model="MessageInfo.name"></el-input>
          </el-form-item>
          <el-form-item prop="tel">
            <el-input placeholder="电话" v-model="MessageInfo.tel"></el-input>
          </el-form-item>
          <el-form-item prop="wechat">
            <el-input placeholder="微信" v-model="MessageInfo.wechat"></el-input>
          </el-form-item>
          <el-form-item  prop="need">
            <el-input placeholder="需求描述" type="textarea" v-model="MessageInfo.need"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('messageForm')"
              >提交留言</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
      <el-col class="contact" :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h3 class="title">与我们<span>合作</span></h3>
          <p class="des">与智创合作，您将会得到更成熟的品牌建设服务。我们以客户至上，同时也相互挑战，力求呈现最好的品牌建设成果。</p>
           <img :src="companyinfo.wechat" alt="">
          <h6>品牌顾问热线(段先生):</h6>
          <p class="tel">+{{companyinfo.contacts}}</p>
           <h4 class="name">公司:{{ companyinfo.name}}</h4>
          <h4 class="address"> 地址:{{companyinfo.address}}</h4>
          <h4>网站备案: {{companyinfo.copyright}}</h4>
      </el-col>
      
    </el-row>
  </div>
</template>
<script>
export default {
  name: "MessageList",
  props:[
    "companyinfo"
  ],
  data() {
    return {
      MessageInfo: {
        name: "",
        tel: "",
        wechat: "",
        need: "",
      },
      rules: {
        name: [
          { required: true, message: "姓名为必填项", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
         tel: [
          { required: true, message: "电话为必填项", trigger: "blur" },
          {
            min: 11,
            max: 40,
            message: "长度在 3 到 40 个字符",
            trigger: "blur",
          },
        ],
        wechat: [
          { required:false, message: "微信", trigger: "blur" },
          {
            min: 3,
            max: 40,
            message: "长度在 3 到 40 个字符",
            trigger: "blur",
          },
        ],
        need: [
          { required: true, message: "项目需求简单写一下吧", trigger: "blur" },
          {
            min: 3,
            max: 200,
            message: "长度在 3 到 200 个字符",
            trigger: "blur",
          },
        ]
      }
    };
  },
  methods:{
      onSubmit(formName){
         this.$refs[formName].validate((valid) => { 
            if(valid){
                  this.$api.addMessage(this.MessageInfo).then((res)=>{
                       if(res.code ===200){
                           this.$ElMessage.success(res.mes)
                       }
                  })
            }
      })
    }
  }
     
  
};
</script>

<style scoped>
.contact{
  color: #333;
  text-align: left;
  
}
@media screen and (max-width:768px) {
   .contact{
     text-align: center;
     padding-left: 0;
   }
   .message-title{
     text-align: center !important;
   }
}
.contact .title {
  font-size: 30px;
  color: #333;
}
.contact .title span{
  color: rgb(220,0,0);
}
.contact .des{
font-size: 18px;
}

.contact  h6{
    font-size: 26px;
    margin-top:20px;
}
.contact .tel{
   font-size: 45px;
   font-family: Impact,'Arial Narrow Bold', sans-serif;
}
.dl-container {
  padding: 50px 0;
}
.map {
  height: 545px;
  border: 1px solid #ccc;
}
.message-title {
  font-size: 30px;
  color: #333;
  text-align: left;
  margin-bottom: 30px;
}
.el-form-item .el-form-item {
  font-size: 35px;
  color: red;
}
::v-deep(.el-form-item .el-form-item__content .el-input  .el-input__inner) {
  border: none;
  background: #f8f8f8;
  height: 40px;
  padding-left: 15px;
}
::v-deep(.el-form-item .el-form-item__content .el-textarea  .el-textarea__inner ) {
  border: none;
  background: #eee;
  height: 80px;
   padding-left: 15px;
}

.el-button {
  width: 100%;
  height: 50px;
  color: rgb(255, 0, 0);
  border: 3px solid red;
  font-size: 20px;
  transition: 0.5s;
  background: white;
}
.el-button:hover {
  background: rgb(255, 0, 0);
  color: white;
  border: none;
}
.el-button i {
  transition: 0.2s;
  font-weight: bolder;
  color: white;
}
.el-button:hover i {
  margin-left: 20px;
}
</style>
