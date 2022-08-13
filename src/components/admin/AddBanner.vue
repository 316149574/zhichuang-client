<template>
  <div class="addBanner">
    <el-form
      :rules="rules"
      ref="bannerForm"
      label-position="left"
      label-width="100px"
      :model="BannerInfo"
    >
      <el-form-item label="上传轮播图">
        <el-upload
          ref="bannerUpload"
          class="banner-uploader"
          list-type="picture-card"
          :limit="1"
          :auto-upload="false"
          :action="uploadUrl"
          :headers="headers"
          :show-file-list="true"
          :on-success="handleBannerSuccess"
        >
          <i class="icon iconfont icon-shangchuan"></i>
          <template #tip>
            <div class="el-upload__tip">建议尺寸: 400*400px, 建议格式： png</div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="BannerInfo.title"></el-input>
      </el-form-item>
       <el-form-item label="轮播描述" prop="des">
        <el-input placeholder="轮播图描述文字，建议字数在20~60之间" type="textarea" :row="10" v-model="BannerInfo.des"></el-input>
      </el-form-item>
       <el-form-item label="背景颜色"   prop="bgcolor">
        <el-input placeholder="支持格式：#fff 、rbg、关键字(red、yellow), 如果设置渐变颜色请用 | 分割 如： red|yellow " v-model="BannerInfo.bgcolor"></el-input>
      </el-form-item>
      <el-form-item label="轮播链接" prop="link">
        <el-input v-model="BannerInfo.link"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('bannerForm')">提交</el-button>
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
      BannerInfo: {
        bannerurl: "",
        title: "",
        des:"",
        bgcolor:"",
        link: ""
      },
      headers: {
        Authorization: this.$storage.getItem("token"),
      },
      rules: {
        title: [
          { required: true, message: "标题为必填项", trigger: "blur" },
          {
            min: 3,
            max: 25,
            message: "长度在 3 到25个字符",
            trigger: "blur",
          },
        ],
        link: [
          { required: true, message: "轮播链接为必填项", trigger: "blur" },
        ],
        des: [
          { required: true, message: "轮播描述为必填项", trigger: "blur" },
          {
            min: 20,
            max: 60,
            message: "长度在20 到60个字符",
            trigger: "blur",
          },
        ]
        ,
        bgcolor: [
          { required: true, message: "背景颜色为必填项", trigger: "blur" },
          {
            min: 2,
            max: 100,
            message: "长度在2 到50个字符",
            trigger: "blur",
          },
        ]
      },
    };
  },
  methods: {
    submit(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (_this.$refs.bannerUpload.uploadRef.fileList.length) {
            _this.$refs.bannerUpload.submit();
          } else {
            _this.$ElMessage.error("请上传轮播图片");
          }
        }
      });
    },
    handleBannerSuccess(res) {
      let _this = this;
      let { path } = res.data;
      this.BannerInfo.bannerurl = path;
      let data = this.BannerInfo;
      this.$api.addBanner(data).then((res) => {
        if (res.code == 40001) {
          _this.$refs.bannerUpload.clearFiles();
        } else {
          _this.$ElMessage.success(res.mes);
          _this.reset();
        }
      });
    },
    reset() {
      this.$refs.bannerUpload.clearFiles();
      this.BannerInfo.title = "";
      this.BannerInfo.link = "";
    },
  },
};
</script>
<style scoped>
.addBanner {
  padding: 20px 40px 20px 20px;
}
.addBanner .btn {
  margin-top: 10px;
}
</style>