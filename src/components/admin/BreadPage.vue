<template>
  <el-breadcrumb separator="/">
    <!-- <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item> -->
     <el-breadcrumb-item  v-for="(item,index) in breadList" :key="item.path">
          <router-link v-if="index==0" to="/admin">{{item.meta.title}}</router-link>
          <span v-else >{{item.meta.title}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    name:'BreadPage',
    computed:{
        breadList(){
            return this.$route.matched;
        }
    }
};
</script>

<style>
</style>