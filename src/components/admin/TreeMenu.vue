<template>
  <el-menu
        class="side-meun"
        background-color="#001529"
        text-color="#eee"
        router
        :unique-opened="true"
      >
        <el-submenu index="1">
          <template #title>
            <i class="icon iconfont icon-yonghu"></i>
            <span>管理员</span>
          </template>
          <el-menu-item index="/admin/administrator">管理员列表</el-menu-item>
          <el-menu-item index="/admin/addadmin">新增管理员</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template #title>
            <i class="icon iconfont icon-anli"></i>
            <span>案例管理</span>
          </template>
          <el-menu-item index="/admin/caselist">案例列表</el-menu-item>
          <el-menu-item index="/admin/addcases">添加案例</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template #title>
            <i class="icon iconfont icon-xinwen_o"></i>
            <span>新闻中心</span>
          </template>
          <el-menu-item index="/admin/newslist">新闻列表</el-menu-item>
          <el-menu-item index="/admin/addnews">发布新闻</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template #title>
            <i class="icon iconfont icon-tuandui"></i>
            <span>团队管理</span>
          </template>
          <el-menu-item index="/admin/teamlist">团队列表</el-menu-item>
          <el-menu-item index="/admin/addteamer">添加成员</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template #title>
            <i class="icon iconfont icon-qiyeyewu"></i>
            <span>业务管理</span>
          </template>
          <el-menu-item index="/admin/businesslist">业务列表</el-menu-item>
          <el-menu-item index="/admin/addbusiness">添加业务</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template #title>
            <i class="icon iconfont icon-guanyu"></i>
            <span>公司信息</span>
          </template>
          <el-menu-item index="/admin/aboutus">关于智创</el-menu-item>
          <el-menu-item index="/admin/companyinfo">公司信息</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template #title>
            <i class="icon iconfont icon-qitaguanggaoshuju"></i>
            <span>首页轮播图</span>
          </template>
          <el-menu-item index="/admin/bannerlist">轮播图列表</el-menu-item>
          <el-menu-item index="/admin/addbanner">添加轮播图</el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template #title>
            <i class="icon iconfont icon-liuyanguanli
"></i>
            <span>客户留言</span>
          </template>
          <el-menu-item index="messagelist">留言列表</el-menu-item>
        </el-submenu>
        
      </el-menu>
</template>

<script>
export default {
  name:'TreeMenu'
}
</script>

<style scoped>
.el-menu {
  border-right: none;
}
.el-menu i {
  color: white;
  margin-right: 10px;
}
</style>