<template>
  <div class="addNews">
    <el-form
      :rules="rules"
      ref="newsForm"
      label-position="left"
      label-width="80px"
      :model="NewsInfo"
    >
      <el-form-item label="新闻标题" prop="title">
        <el-input v-model="NewsInfo.title"></el-input>
      </el-form-item>
      <el-form-item label="新闻简介" prop="des">
        <el-input type="textarea" v-model="NewsInfo.des"></el-input>
      </el-form-item>
      <el-form-item label="新闻分类">
        <el-select v-model="NewsInfo.category" placeholder="请选择新闻分类">
          <el-option value="all">全部分类 </el-option>
          <el-option value="zhichuang">智创动态 </el-option>
          <el-option value="industry">行业资讯 </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="缩略图">
        <el-upload
          ref="thumbUpload"
          class="avatar-uploader"
          list-type="picture-card"
          :auto-upload="false"
          :action="uploadUrl"
          :headers="headers"
          :show-file-list="true"
          :on-success="handleThumbnailSuccess"
        >
          <i class="icon iconfont icon-shangchuan"></i>
          <template #tip>
            <div class="el-upload__tip">
              上传尺寸宽高比为 1:2 
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="新闻内容">
        <vue-editor v-model="NewsInfo.content"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('newsForm')">提交</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
import conifg from '../../conifg'
export default {
  computed: {
    uploadUrl: function () {
      return conifg.baseApi + "/api/upload";
    },
  },
  components: {
    VueEditor,
  },

  data() {
    return {
      NewsInfo: {
        title: "",
        des: "",
        thumbnail: "",
        category: "",
        content: "",
      },
      headers: {
        Authorization: this.$storage.getItem("token"),
      },
      rules: {
        title: [
          { required: true, message: "新闻标题必填项", trigger: "blur" },
          {
            min: 3,
            max: 30,
            message: "长度在 3 到 30 个字符",
            trigger: "blur",
          },
        ],
        des: [
          { required: true, message: "新闻简介必填项", trigger: "blur" },
          {
            min: 3,
            max: 40,
            message: "长度在 3 到 40 个字符",
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
            if(valid){
               if(_this.NewsInfo.category && _this.NewsInfo.content){
                    if(_this.$refs.thumbUpload.uploadRef.fileList.length){
                        _this.$refs.thumbUpload.submit();
                    }else{
                       _this.$ElMessage.error("请上传新闻缩略图");
                    }

               }else{
                  _this.$ElMessage.error("新闻分类和新闻内容不能为空");
               }
            }
        }) 
    },
    handleThumbnailSuccess(res){
       let _this = this;
       let {path} = res.data;
       this.NewsInfo.thumbnail = path;
       let data = this.NewsInfo;
       this.$api.addNews(data).then(res=>{
            if(res.code == 40001){
               _this.$refs.thumbUpload.clearFiles();
            }else{
              _this.$ElMessage.success(res.mes);
              _this.reset();
            }
       });
    },
    reset(){
      this.$refs.thumbUpload.clearFiles();
      this.NewsInfo.title = '';
      this.NewsInfo.des = '';
      this.NewsInfo.category = '';
      this.NewsInfo.content = '';
    }
  },
};
</script>
<style scoped>
.addNews {
  padding: 20px 40px 20px 20px;
}
.addNews .btn {
  margin-top: 10px;
}
</style>