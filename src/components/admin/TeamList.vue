<template>
  <el-table class="table" :data="TeamList" lazy stripe border>
    <el-table-column prop="thumbnail" align="center" label="头像">
      <template #default="scope">　　　　
        <img
          v-lazy="scope.row.thumbnail"
          width="80"
          height="80"
          class="head_pic"
        />  　　
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="姓名"
    ></el-table-column>
    <el-table-column prop="position" align="center" label="职位">
    </el-table-column>
    <el-table-column
      prop="experience"
      align="center"
      label="履历"
    ></el-table-column>
    <el-table-column fixed="right" align="center" label="操作" width="240">
      <template #default="scope">
        <el-button
          @click.prevent="editor(scope.$index, caseList)"
          type="primary"
          size="small"
        >
          编辑
        </el-button>
        <el-button
          @click.prevent="deleteRow(scope.$index, TeamList)"
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
  name: "TeamList",
  data() {
    return {
      TeamList: [],
    };
  },
  mounted() {
    this.$api.getTeamList().then((res) => {
      this.TeamList = res.data;
    });
  },
  methods: {
    deleteRow(index, rows) {
      let delNew = rows[index];
      this.$api.deleteTeam({ _id: delNew._id }).then((res) => {
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