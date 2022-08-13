<template>
  <div class="addTeamer">
    <el-form
      :rules="rules"
      ref="teamerForm"
      label-position="left"
      label-width="80px"
      :model="TeamerInfo"
    >
      <el-form-item label="成员头像">
        <el-upload
          ref="thumbUpload"
          class="avatar-uploader"
          list-type="picture-card"
          :limit="1"
          :auto-upload="false"
          :action="uploadUrl"
          :headers="headers"
          :show-file-list="true"
          :on-success="handleThumbnailSuccess"
        >
          <i class="icon iconfont icon-shangchuan"></i>
          <template #tip>
            <div class="el-upload__tip">
               尺寸宽高比为：1:2
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="成员姓名" prop="name">
        <el-input v-model="TeamerInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="成员职位" prop="position">
        <el-input v-model="TeamerInfo.position"></el-input>
      </el-form-item>
      <el-form-item label="成员履历" prop="experience">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="多条履历用 '|' 符号隔开"
          v-model="TeamerInfo.experience"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('teamerForm')">提交</el-button>
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
      TeamerInfo: {
        name: "",
        position: "",
        experience: "",
        thumbnail: "",
      },
      headers: {
        Authorization: this.$storage.getItem("token"),
      },
      rules: {
        name: [
          { required: true, message: "姓名为必填项", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 3 到10个字符",
            trigger: "blur",
          },
        ],
        position: [
          { required: true, message: "职位为必填项", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
        ],
        experience: [
          { required: true, message: "履历为必填项", trigger: "blur" },
          {
            min: 10,
            max: 500,
            message: "长度在 10 到 500 个字符",
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
          if (_this.$refs.thumbUpload.uploadRef.fileList.length) {
            _this.$refs.thumbUpload.submit();
          } else {
            _this.$ElMessage.error("请上传成员头像");
          }
        }
      });
    },
    handleThumbnailSuccess(res) {
      let _this = this;
      let { path } = res.data;
      this.TeamerInfo.thumbnail = path;
      let data = this.TeamerInfo;
      this.$api.addTeam(data).then((res) => {
        if (res.code == 40001) {
          _this.$refs.thumbUpload.clearFiles();
        } else {
          _this.$ElMessage.success(res.mes);
          _this.reset();
        }
      });
    },
    reset() {
      this.$refs.thumbUpload.clearFiles();
      this.TeamerInfo.name = "";
      this.TeamerInfo.position = "";
      this.TeamerInfo.experience = "";
    },
  },
};
</script>
<style scoped>
.addTeamer {
  padding: 20px 40px 20px 20px;
}
.addTeamer .btn {
  margin-top: 10px;
}
</style>