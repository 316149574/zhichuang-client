<template>
  <el-table class="table" :data="BusinessList" lazy stripe border>
    <el-table-column prop="icon" align="center" label="图标">
      <template #default="scope">　　　　
        <img
          v-lazy="scope.row.icon"
          width="80"
          height="80"
          class="head_pic"
        />  　　
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="业务名称"
    ></el-table-column>
    <el-table-column prop="content" align="center" label="子业务项">
    </el-table-column>
    <el-table-column
      prop="des"
      align="center"
      label="业务描述"
    ></el-table-column>
    <el-table-column fixed="right" align="center" label="操作" width="240">
      <template #default="scope">
        <el-button
          @click.prevent="editor(scope.$index, BusinessList)"
          type="primary"
          size="small"
        >
          编辑
        </el-button>
        <el-button
          @click.prevent="deleteRow(scope.$index,BusinessList)"
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
  name: "BusinessList",
  data() {
    return {
      BusinessList: [],
    };
  },
  mounted() {
    this.$api.getBusinessList().then((res) => {
      this.BusinessList = res.data;
    });
  },
  methods: {
    deleteRow(index, rows) {
      let delBusiness = rows[index];
      this.$api.deleteBusiness({ _id:delBusiness._id }).then((res) => {
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