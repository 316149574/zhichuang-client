<template>
  <el-table class="table" :data="BannerList" lazy stripe border>
    <el-table-column prop="bannerurl" align="center" label="轮播图">
      <template #default="scope">　　　　
        <img
          v-lazy="scope.row.bannerurl"
          width="192"
          height="108"
          class="head_pic"
        />  　　
      </template>
    </el-table-column>
    <el-table-column
      prop="title"
      align="center"
      label="标题"
    ></el-table-column>
    <el-table-column
      prop="des"
      align="center"
      label="描述"
    ></el-table-column>
    <el-table-column
      prop="bgcolor"
      align="center"
      label="背景颜色"
    ></el-table-column>
    <el-table-column prop="link" align="center" label="链接地址">
    </el-table-column>
    <el-table-column fixed="right" align="center" label="操作" width="240">
      <template #default="scope">
        <el-button
          @click.prevent="deleteRow(scope.$index, BannerList)"
          type="danger"
          size="small"
        >
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "BannerList",
  data() {
    return {
      BannerList: [],
    };
  },
  mounted() {
    this.$api.getBannerList().then((res) => {
      this.BannerList = res.data;
    });
  },
  methods: {
    deleteRow(index, rows) {
      let delNew = rows[index];
      this.$api.deleteBanner({ _id: delNew._id }).then((res) => {
        this.$ElMessage.success("删除成功");
      });
      rows.splice(index, 1); // 只是静态删除
    },
    editor() {
      alert("功能暂未开发");
    },
  },
};
</script>

<style scoped>
.select {
  height: 50px;
  padding: 10px 0 0 10px;
}
.select .title {
  font-size: 14px;
  color: #333;
}
.el-table td,
.el-table th {
  text-align: center;
}
</style>