<template>
  <el-container>
    <el-aside width="200px">
      <h1 class="logo">
        <img width="180" src="../../assets/images/logo.png" />
      </h1>
      <TreeMenu></TreeMenu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="path">
          <BreadPage></BreadPage>
        </div>

        <div class="user-info">
          <router-link class="gohome" to="/">网站首页</router-link>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              登录用户: {{ userInfo }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TreeMenu from '../../components/admin/TreeMenu.vue'
import BreadPage from '../../components/admin/BreadPage.vue'
export default {
  components:{
    TreeMenu,
    BreadPage
  },
  mounted(){
    // 校验用户是否登陆
    this.$api.verifyLogin().then((res)=>{
       if(res.code == 200){
       }
    });
  },
  data() {
    return {
      userInfo: this.$store.state.userInfo,
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        // 退出登录   删除本地token vuex中的username  跳转到登陆页面
        this.$store.commit("saveUserInfo", "");
        this.$storage.clearItem("token");
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped>
.gohome{
  margin-right: 20px;
}
.el-container {
  height: 100vh;
  background: #eee;
}
.el-aside {
  height: 100%;
  background: #001529;
}

.el-aside .logo {
  text-align: center;
  padding-top: 5px;
}

.el-header {
  background: white;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
}

.el-main {
  background: white;
  margin: 15px;
  padding: 0;
}
</style>
