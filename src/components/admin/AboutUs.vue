<template>
  <div class="about">
    <el-form
      :rules="rules"
      ref="aboutForm"
      label-position="left"
      label-width="80px"
      :model="AboutInfo"
    >
      <el-form-item label="公司标语" prop="slogan">
        <el-input
        placeholder="如果标语有中文和英文,请用英文 '|' 符号隔开 "
          v-model="AboutInfo.slogan"
        ></el-input>
      </el-form-item>
      <el-form-item label="业务介绍" prop="introduce">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="介绍公司主要业务和业务范围"
          v-model="AboutInfo.introduce"
        ></el-input>
      </el-form-item>
      <el-form-item label="发展历程" prop="dev">
        <el-input
          type="textarea"
          :rows="4"
          v-model="AboutInfo.dev"
        ></el-input>
      </el-form-item>
      <el-form-item label="智创理念" prop="idea">
        <el-input
          type="textarea"
          :rows="4"
          v-model="AboutInfo.idea"
        ></el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="成功案例" prop="successcase">
            <el-input placeholder="填案例数量" v-model="AboutInfo.successcase"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="专业年限" prop="experience">
            <el-input placeholder="填公司成立多少年" v-model="AboutInfo.experience"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="团队人数" prop="teamnumber">
            <el-input v-model="AboutInfo.teamnumber"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="6">
          <el-form-item label="行业排名" prop="top">
            <el-input v-model="AboutInfo.top"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submit('aboutForm')"
          >提交更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AboutInfo: {
        slogan:"",
        introduce:"",
        dev:"",
        idea:"",
        successcase:"",
        experience:"",
        teamnumber:"",
        top:""
      },
      rules: {
        slogan: [
          { required: true, message: "公司标语为必填项", trigger: "blur" },
        ],
        introduce: [
          { required: true, message: "业务描述为必填项", trigger: "blur" },
          {
            min: 20,
            max: 600,
            message: "长度在 20 到 600 个字符",
            trigger: "blur",
          },
        ],
        dev: [
          { required: true, message: "公司发展为必填项", trigger: "blur" },
          {
            min: 10,
            max: 200,
            message: "长度在 10 到 200 个字符",
            trigger: "blur",
          },
        ],
        idea: [
          { required: true, message: "公司理念为必填项", trigger: "blur" },
          {
            min: 10,
            max: 50,
            message: "长度在 10 到 50 个字符",
            trigger: "blur",
          },
        ],
        successcase: [
          { required: true, message: "成功案例为必填项", trigger: "blur" },
         
        ],
        experience: [
          { required: true, message: "专业年限为必填项", trigger: "blur" },
         
        ],
        teamnumber: [
          { required: true, message: "团队人数为必填项", trigger: "blur" },
          
        ],
        top: [
          { required: true, message: "行业排名为必填项", trigger: "blur" },
        
        ]
      },
    };
  },
  mounted(){
    const _this = this;
    this.$api.getAbout().then(res=>{
       const data = res.data[0]; 
       _this.AboutInfo.slogan = data.slogan;
       _this.AboutInfo.introduce = data.introduce;
       _this.AboutInfo.dev = data.dev;
       _this.AboutInfo.idea = data.idea;
       _this.AboutInfo.experience = data.experience;
       _this.AboutInfo.successcase = data.successcase;
       _this.AboutInfo.teamnumber= data.teamnumber;
       _this.AboutInfo.top = data.top;

    });
  },
  methods: {
    submit(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
            const data = _this.AboutInfo;
            this.$api.addAbout(data).then(res=>{
                _this.$ElMessage.success(res.mes);
            });
        }
      });
    }
  },
};
</script>
<style scoped>
.about {
  padding: 20px 40px 20px 20px;
}
.about .btn {
  margin-top: 10px;
}
</style>