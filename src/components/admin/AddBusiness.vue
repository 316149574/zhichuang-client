<template>
  <div class="addBusiness">
    <el-form
      :rules="rules"
      ref="businessForm"
      label-position="left"
      label-width="80px"
      :model="BusinessInfo"
    >
      <el-form-item label="业务图标">
        <el-upload
          ref="iconUpload"
          class="icon"
          list-type="picture-card"
          :limit="1"
          :auto-upload="false"
          :action="uploadUrl"
          :headers="headers"
          :show-file-list="true"
          :on-success="handleThumbnailSuccess"
        >
          <i class="icon iconfont icon-shangchuan"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="业务名称" prop="name">
        <el-input v-model="BusinessInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="业务描述" prop="des">
        <el-input
          type="textarea"
          :rows="4"
          v-model="BusinessInfo.des"
        ></el-input>
      </el-form-item>
      <el-form-item label="业务子项" prop="content">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="多条业务子项内容用 '|' 符号隔开"
          v-model="BusinessInfo.content"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('businessForm')">提交</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import conifg from "../../conifg";
export default {
  computed: {
    uploadUrl: function () {
      return conifg.baseApi + "/api/upload";
    },
  },

  data() {
    return {
      BusinessInfo: {
        name: "",
        content: "",
        des:"",
        icon: "",
      },
      headers: {
        Authorization: this.$storage.getItem("token"),
      },
      rules: {
        name: [
          { required: true, message: "业务名称为必填项", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 3 到15个字符",
            trigger: "blur",
          },
        ],
        des: [
          { required: true, message: "业务描述为必填项", trigger: "blur" },
          {
            min: 3,
            max: 400,
            message: "长度在 3 到 400 个字符",
            trigger: "blur",
          },
        ],
        content: [
          { required: true, message: "业务子项为必填项", trigger: "blur" },
          {
            min: 10,
            max: 200,
            message: "长度在 10 到 200 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submit(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (_this.$refs.iconUpload.uploadRef.fileList.length) {
            _this.$refs.iconUpload.submit();
          } else {
            _this.$ElMessage.error("请上传业务图标");
          }
        }
      });
    },
    handleThumbnailSuccess(res) {
      let _this = this;
      let { path } = res.data;
      this.BusinessInfo.icon = path;
      let data = this.BusinessInfo;
      this.$api.addBusiness(data).then((res) => {
        if (res.code == 40001) {
          _this.$refs.iconUpload.clearFiles();
        } else {
          _this.$ElMessage.success(res.mes);
          _this.reset();
        }
      });
    },
    reset() {
      this.$refs.iconUpload.clearFiles();
      this.BusinessInfo.name = "";
      this.BusinessInfo.des = "";
      this.BusinessInfo.content = "";
    },
  },
};
</script>
<style scoped>
.addBusiness {
  padding: 20px 40px 20px 20px;
}
.addBusiness .btn {
  margin-top: 10px;
}
</style>