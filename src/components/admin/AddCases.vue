
<template>
  <div class="addcase">
    <el-form
      :model="caseInfo"
      :rules="rules"
      ref="caseForm"
      label-width="150px"
      class="caseinfo"
    >
      <el-form-item label="项目名称" prop="name">
        <el-input v-model="caseInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="项目描述" prop="des">
        <el-input type="textarea" v-model="caseInfo.des"></el-input>
      </el-form-item>
      <el-form-item label="项目分类">
        <el-select v-model="caseInfo.category" placeholder="选择项目类别">
          <el-option label="UI设计" value="ui"></el-option>
          <el-option label="网站开发" value="web"></el-option>
          <el-option label="视频制作" value="movie"></el-option>
          <el-option label="广告设计" value="ad"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="合作客户logo">
        <el-switch v-model="caseInfo.isbanner"></el-switch>
      </el-form-item>
      <el-form-item > 
        <el-upload
          v-show="caseInfo.isbanner"
          ref="bannerUpload"
          class="banner-pic"
          :action="uploadUrl"
          name="file"
          :limit="1"
          :auto-upload="false"
          :on-exceed="bannerExceed"
          :on-success="handleBannerSuccess"
          list-type="picture-card"
          :headers="headers"
          :show-file-list="true"
        >
          <i class="icon iconfont icon-shangchuan"></i>
          <template #tip>
            <div class="el-upload__tip">公司合作logo：200*100px</div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="项目缩略图">
        <el-upload
          ref="thumbUpload"
          class="thumb-pic"
          :action="uploadUrl"
          :auto-upload="false"
          name="file"
          :limit="1"
          :on-exceed="thumbExceed"
          :on-success="handleThumbSuccess"
          list-type="picture-card"
          :headers="headers"
          :show-file-list="true"
        >
          <i class="icon iconfont icon-shangchuan"></i>
          <template #tip>
            <div class="el-upload__tip">缩略图尺寸：460*345px</div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="项目案例图片">
        <el-upload
          ref="caseUpload"
          class="case-pic"
          :action="uploadUrl"
          name="file"
          :limit="10"
          :auto-upload="false"
          :on-exceed="caseExceed"
          :on-success="handleCaseSuccess"
          list-type="picture-card"
          :headers="headers"
          :show-file-list="true"
        >
          <i class="icon iconfont icon-shangchuan"></i>
          <template #tip>
            <div class="el-upload__tip">
              项目案例图片：建议 750*800px,最多上传10张
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('caseForm')"
          >添加案例</el-button
        >
        <el-button type="danger" @click="reset"> 重置 </el-button>
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
      iNow:0,
      caseInfo: {
        name: "", // 项目名称
        des: "", // 项目描述
        thumbnail: "", // 缩略图
        isbanner: false, // 是否设置为轮播图
        bannerurl: "", // 轮播图地址
        caseimgurl: [], // 项目案例图片地址
        category: "",
      },
      headers: {
        Authorization: this.$storage.getItem("token"),
      },
      rules: {
        name: [
          { required: true, message: "项目项目名称为必填", trigger: "blur" },
          {
            min: 3,
            max: 50,
            message: "长度在 3 到 50 个字符",
            trigger: "blur",
          },
        ],
        des: [
          { required: true, message: "项目描述为必填", trigger: "blur" },
          {
            min: 10,
            max: 300,
            message: "长度在 10 到300个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    isOk(){
      var num = this.caseInfo.isbanner?2:1;
      if (this.iNow ===this.$refs.caseUpload.uploadRef.fileList.length +num ){
        this.submitData();
        this.iNow =0;
      }
    },
    handleBannerSuccess(res, file) {
      const _this = this;
      this.caseInfo.bannerurl = res.data.path;
      this.iNow++;
      this.isOk();
      
    },
    handleThumbSuccess(res, file) {
      this.caseInfo.thumbnail = res.data.path;
       this.iNow++;
       this.isOk();
    },
    handleCaseSuccess(res, file, fileList) {
      this.caseInfo.caseimgurl.push(res.data.path);
      this.iNow++;
      this.isOk();
    },
    thumbExceed() {
      this.$ElMessage.error("缩略图只能上传一张");
    },
    bannerExceed() {
      this.$ElMessage.error("轮播图只能上传一张");
    },
    caseExceed() {
      this.$ElMessage.error("案例图片最多上传5张");
    },
    submitData() {
      const {
        name,
        des,
        thumbnail,
        bannerurl,
        isbanner,
        caseimgurl,
        category,
      } = this.caseInfo;

      this.$api
        .addCase({
          name,
          des,
          thumbnail,
          bannerurl,
          isbanner,
          caseimgurl,
          category,
        })
        .then((res) => {
          this.$ElMessage.success(res.mes);
          this.reset();
        });
    },
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (_this.caseInfo.category) {
            if (
              _this.$refs.thumbUpload.uploadRef.fileList.length > 0 &&
              _this.$refs.caseUpload.uploadRef.fileList.length > 0
            ) {
              if (this.$refs.bannerUpload.uploadRef.fileList.length > 0) {
                this.$refs.bannerUpload.submit();
              }
              this.$refs.thumbUpload.submit();
              this.$refs.caseUpload.submit();
            } else {
              this.$ElMessage.error("必须上传缩略图和案例图片");
            }
          } else {
            this.$ElMessage.error("请选择案例分类");
          }
        }
      });
    },
    reset() {
      this.$refs.caseUpload.clearFiles();
      this.$refs.bannerUpload.clearFiles();
      this.$refs.thumbUpload.clearFiles();
      this.caseInfo.thumbnail = "";
      this.caseInfo.caseimgurl = [];
      this.caseInfo.bannerurl = "";
      this.caseInfo.isbanner = false;
      this.caseInfo.category = "";
      this.caseInfo.name = "";
      this.caseInfo.des = "";
    },
  },
};
</script>

<style>
.addcase {
  padding: 20px 40px 20px 20px;
}
</style>
