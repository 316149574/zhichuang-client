<template>
  <div class="register">
    <el-form
       ref="register"
      label-position="right"
      label-width="80px"
      :model="userInfo"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="userInfo.tel"></el-input>
      </el-form-item>
      <el-form-item label="岗位" prop="station">
        <el-input v-model="userInfo.station"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addUser">添加用户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Addmin",
  data() {
    return {
       userInfo:{
           username:'',
           password:'',
           tel:'',
           station:''
       },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 10, message: "用户名长度为2~12位", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码名长度为3~12位", trigger: "blur" },
          { min: 3, max: 10, message: "密码名长度为3~12位", trigger: "blur" },
        ],
        tel: [
          { required: true, message: "电话必填", trigger: "blur" }
        ],
        station: [
          { required: true, message: "岗位必填", trigger: "blur" }
        ]
      }
    }
  },
  methods:{
      addUser(){
           this.$refs.register.validate((valid) => {
               if(valid){
                 let {username,password,tel, station} = this.userInfo;
                  this.$api.registerUser({
                      username,
                      password,
                      tel,
                      station
                  }).then(res=>{
                       this.$ElMessage.success(res.mes);
                       this.userInfo = '';
                  });
               }
           })
      }
  }
};
</script>

<style scoped>
  .register{
      padding: 20px 40px 20px 20px;
  }
</style>
