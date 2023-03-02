<template>
  <div class="navbar">
    <div class="dl-container">
      <div class="navbar-header">
        <h1 class="logo"><img src="../../assets/images/logo_client.png" /></h1>
        <span
          @click.stop="dropdown"
          ref="menu_btn"
          class="icon iconfont icon-menucaidan"
        ></span>
      </div>
      <ul ref="navbarList" class="navbar-list">
        <li><a href="###">首页</a></li>
        <li><a href="###">关于</a></li>
        <li><a href="###">服务</a></li>
        <li><a href="###">案例</a></li>
        <li><a href="###">团队</a></li>
        <li><a href="###">联系</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  mounted() {
    document.onclick = () => {
      this.$refs.navbarList.style.display = "none";
      this.$refs.menu_btn.className = "icon iconfont icon-menucaidan";
    };
  },
  data() {
    return {
      showBtn: false,
    };
  },
  methods: {
    dropdown() {
      this.showBtn = !this.showBtn;
      if (this.showBtn) {
        this.$refs.navbarList.style.display = "block";
        this.$refs.menu_btn.className = "icon iconfont icon-guanbi";
      } else {
        this.$refs.navbarList.style.display = "none";
        this.$refs.menu_btn.className = "icon iconfont icon-menucaidan";
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000000;
  background: white;
  height: 60px;
  border-bottom: 1px solid #ccc;
  border: 4px solid black;
}

.navbar .dl-container {
  padding: 0 40px;
  display: flex;
  flex-direction: column;
}
.navbar .navbar-header {
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.navbar .navbar-header .iconfont {
  font-size: 36px;
  color: rgb(200, 0, 0);
  line-height: 60px;
  cursor: pointer;
}
.navbar .navbar-list {
  display: none;
  background: white;
  z-index: 100000;
  margin: 0 -40px;
}
.navbar .navbar-list li a {
  line-height: 50px;
  padding: 0 20px;
  display: block;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.navbar .logo img {
  height: 50px;
}

@media screen and (min-width: 768px) {
  .navbar {
    height: 80px;
  }

  .navbar .navbar-header {
    height: 80px;
  }
  .navbar .dl-container {
    flex-direction: row;
    justify-content: space-between;
  }
  .navbar .navbar-list {
    display: block !important;
    background: none;
  }
  .navbar .navbar-list li {
    float: left;
  }
  .navbar .navbar-header .iconfont {
    display: none;
    line-height: 80px;
  }
  .navbar .navbar-list li a {
    line-height: 80px;
    border-bottom: none;
  }
  .navbar .logo img {
    height: 60px;
  }
}
@media screen and (min-width: 992px) {
  .navbar {
    height: 100px;
  }
  .navbar .navbar-header {
    height: 100px;
  }
  .navbar .navbar-header .iconfont {
    line-height: 100px;
  }
  .navbar .navbar-list {
    display: block !important;
    background: none;
  }
  .navbar .navbar-list li a {
    line-height: 100px;
    padding: 0 30px;
  }
  .navbar .logo img {
    height: 80px;
  }
}
@media screen and (min-width: 1200px) {
  .navbar .navbar-list {
    display: block !important;
    background: none;
  }
  .navbar .navbar-list li a {
    padding: 0 40px;
  }
}
</style>