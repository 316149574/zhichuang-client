<template>
  <div class="login-box">
    <div class="modal">
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <h3 class="title">智创后台管理系统</h3>
        <el-form-item prop="username">
          <el-input
            v-model="user.username"
            placeholder="username"
            prefix-icon="el-icon-user"
            type="text"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="user.password"
            placeholder="password"
            prefix-icon="el-icon-view"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: "",
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
      },
    };
  },
  methods: {
    login() {
      // 判断form表单是否通过校验   valid值： true false
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          //发送登陆请求
          this.$api.login(this.user).then((res) => {
             let { username , token} = res.data;
             this.$store.commit("saveUserInfo",username);
             this.$storage.setItem("token",token);
             this.$router.push('/admin');
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.login-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #efefef;
}
.login-box .modal {
  width: 500px;
  padding: 50px 20px;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 3px 7px 7px #eee;
}
.login-box .modal .title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  color: #333;
}
.el-button {
  width: 100%;
}
</style>