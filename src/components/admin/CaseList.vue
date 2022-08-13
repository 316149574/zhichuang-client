<template>
  <div class="select">
    <span class="title">请选择案例类别</span>:
    <el-select v-model="category" @change="onchange">
      <el-option label="全部案例" value="all"></el-option>
      <el-option label="UI设计" value="ui"></el-option>
      <el-option label="网站开发" value="web"></el-option>
      <el-option label="视频制作" value="movie"></el-option>
      <el-option label="广告设计" value="ad"></el-option>
    </el-select>
  </div>
  <el-table class="table" :data="caseList" lazy stripe border>
    <el-table-column prop="thumbnail" align="center" label="缩略图">
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
      label="项目名称"
    ></el-table-column>
    <el-table-column prop="des" align="center" label="项目描述">
    </el-table-column>
    <el-table-column
      prop="category"
      align="center"
      label="案例分类"
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
          @click.prevent="deleteRow(scope.$index, caseList)"
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
  name: "caseList",
  data() {
    return {
      category: "all",
      caseList: [],
    };
  },
  mounted() {
    this.$api.getCaseList({category:'all'}).then((res) => {
      this.caseList = res.data;
    });
  },
  methods: {
    onchange() {
      this.$api.getCaseList({ category: this.category }).then((res) => {
        this.caseList = res.data;
      });
    },
    deleteRow(index, rows) {
      let delCase = rows[index];
      this.$api.deleteCase({ _id: delCase._id }).then((res) => {
        this.$ElMessage.success("删除成功");
      });
      rows.splice(index, 1); // 只是静态删除
    },
    editor(){
      alert('功能暂未开发');
    }
  },
};
</script>

<style scoped>
.select{
  height: 50px;
  padding: 10px 0 0 10px;
}
.select .title{
  font-size: 14px;
  color: #333;
}
.el-table td,
.el-table th {
  text-align: center;
}
</style>