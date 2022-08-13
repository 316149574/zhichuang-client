<template>
  <div class="companyInfo">
    <el-form
      :rules="rules"
      ref="companyInfo"
      label-position="left"
      label-width="100px"
      :model="CompanyInfo"
    >
      <el-form-item label="公司名称" prop="name">
        <el-input v-model="CompanyInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="公司logo">
        <el-upload
          ref="logoUpload"
          class="uploadlogo"
          list-type="picture-card"
          :limit="1"
          :on-change="logochange"
          :auto-upload="false"
          :action="uploadUrl"
          :headers="headers"
          :on-success="handleLogoSuccess"
        >
          <i class="icon iconfont icon-shangchuan"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="微信二维码">
        <el-upload
          ref="wechatUpload"
          class="uploadwechat"
          list-type="picture-card"
          :limit="1"
          :on-change="wechatchange"
          :auto-upload="false"
          :action="uploadUrl"
          :headers="headers"
          :show-file-list="showwechat"
          :on-success="handleWechatSuccess"
        >
          <i class="icon iconfont icon-shangchuan"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="公司地址" prop="address">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="如果有地址路线描述,请在公司地址后面用 '|'符号隔开， 例如： 天府三街新希望大厦2号楼107号 | 乘坐地铁1号线或者18号线，在天府三街地铁口B出口出站，出站后右转就可以看到新希望大厦 "
          v-model="CompanyInfo.address"
        ></el-input>
      </el-form-item>
      <el-form-item label="备案号" prop="copyright">
        <el-input v-model="CompanyInfo.copyright"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="contacts">
        <el-input
          placeholder="格式为: 段礼|15182546309 姓名和电话用 '|'符号隔开    多个联系人用'&'符号隔开 例如：段礼|15182546309 & 蒋静|17780256700 "
          v-model="CompanyInfo.contacts"
        ></el-input>
      </el-form-item>
      <el-form-item label="QQ号" prop="qq">
        <el-input v-model="CompanyInfo.qq"></el-input>
      </el-form-item>
      <el-form-item label="地图代码" prop="map">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="将第三方地图代码生成粘贴到此处"
          v-model="CompanyInfo.map"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('companyInfo')"
          >提交/更新</el-button
        >
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
  mounted() {
    const _this = this;
    this.$api.getCompanyInfo().then((res) => {
      const data = res.data[0];
      if (res.data.length) {
        _this.CompanyInfo.name = data.name;
        _this.CompanyInfo.copyright = data.copyright;
        _this.CompanyInfo.address = data.address;
        _this.CompanyInfo.contacts = data.contacts;
        _this.CompanyInfo.qq = data.qq;
        _this.CompanyInfo.map = data.map;
        _this.CompanyInfo.logo = data.logo;
        _this.CompanyInfo.wechat = data.wechat;
      }
    });
  },
  data() {
    return {
      CompanyInfo: {
        name: "",
        logo: "",
        wechat: "",
        address: "",
        copyright: "",
        contacts: "",
        qq: "",
        map: "",
      },
      headers: {
        Authorization: this.$storage.getItem("token"),
      },
      rules: {
        name: [
          { required: true, message: "公司名称为必填项", trigger: "blur" },
          {
            min: 2,
            max: 30,
            message: "长度在 2 到30个字符",
            trigger: "blur",
          },
        ],
        address: [
          { required: true, message: "业务描述为必填项", trigger: "blur" },
        ],
        copyright: [
          { required: true, message: "备案号为必填项", trigger: "blur" },
        ],
        contacts: [
          { required: true, message: "联系人为必填项", trigger: "blur" },
        ],
        qq: [{ required: true, message: "QQ号为必填项", trigger: "blur" }],
        map: [{ required: true, message: "地图代码为必填项", trigger: "blur" }],
      },
    };
  },
  methods: {
    error() {
      console.log(this.$refs.logoUpload);
    },
    logochange() {
      this.showlogo = true;
    },
    wechatchange() {
      this.showwechat = true;
    },
    submit(formName) {
      const _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            _this.$refs.logoUpload.uploadRef.fileList.length &&
            _this.$refs.wechatUpload.uploadRef.fileList.length
          ) {
            _this.$refs.logoUpload.submit();
          } 
          else if (_this.CompanyInfo.logo || _this.CompanyInfo.wechat) {
            const data = _this.CompanyInfo;
            this.$api.addCompanyInfo(data).then((res) => {
              if (res.code == 40001) {
                //_this.$refs.iconUpload.clearFiles();
              } else {
                _this.$ElMessage.success(res.mes);
              }
            });
          } else {
            _this.$ElMessage.error("请上传logo和二维码图片");
          }
        }
      });
    },
    handleLogoSuccess(res) {
      let _this = this;
      let { path } = res.data;
      this.CompanyInfo.logo = path;
      _this.$refs.wechatUpload.submit();
    },
    handleWechatSuccess(res) {
      let _this = this;
      let { path } = res.data;
      this.CompanyInfo.wechat = path;
      let data = this.CompanyInfo;
      this.$api.addCompanyInfo(data).then((res) => {
        if (res.code == 40001) {
          //_this.$refs.iconUpload.clearFiles();
        } else {
          _this.$ElMessage.success(res.mes);
        }
      });
    },
  },
};
</script>
<style scoped>
.companyInfo {
  padding: 20px 40px 20px 20px;
}
.companyInfo .btn {
  margin-top: 10px;
}
.logo,
.wechat {
  width: 146px;
  height: 146px;
  border-radius: 6px;
  margin-right: 10px;
  float: left;
}
.uploadlogo,
uploadwechat {
  float: left;
}
</style>