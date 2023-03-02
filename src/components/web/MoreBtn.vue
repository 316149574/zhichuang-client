<template>
  <div class="more">
    <router-link to="/">
      <el-button size="large" round
        >更多 <i class="icon iconfont icon-jiantou_xiangyou_o"></i
      ></el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MoreBtn",
};
</script>

<style scoped>
.more {
  text-align: center;
  margin: 50px 0px 0px;
}
.el-button {
  width: 280px;
  height: 50px;
  color: rgb(255, 0, 0);
  font-size: 20px;
}
.el-button:hover {
  background: rgb(255, 0, 0);
  color: white;
  border: none;
}
.el-button i {
  transition: 0.2s;
  font-size: 26px;
  font-weight: bolder;
  color: white;
  vertical-align: middle;
}
.el-button:hover i {
  margin-left: 20px;
}
</style>


