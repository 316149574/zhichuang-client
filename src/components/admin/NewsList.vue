<template>
  <div class="select">
    <span class="title">请选择案例类别</span>:
    <el-select v-model="category" @change="onchange">
      <el-option label="全部分类" value="all"></el-option>
      <el-option label="智创动态" value="zhichuang"></el-option>
      <el-option label="行业资讯" value="industry"></el-option>
    </el-select>
  </div>
  <el-table class="table" :data="newsList" lazy stripe border>
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
      prop="title"
      align="center"
      label="新闻标题"
    ></el-table-column>
    <el-table-column prop="des" align="center" label="新闻简介">
    </el-table-column>
    <el-table-column
      prop="category"
      align="center"
      label="新闻类别"
    ></el-table-column>
     <el-table-column
      prop="createtime"
      align="center"
      label="发布时间"
    ></el-table-column>
    <el-table-column fixed="right" align="center" label="操作" width="240">
      <template #default="scope">
        <el-button
          @click.prevent="editor(scope.$index, newsList)"
          type="primary"
          size="small"
        >
          编辑
        </el-button>
        <el-button
          @click.prevent="deleteRow(scope.$index, newsList)"
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
  name: "newList",
  data() {
    return {
      category: "all",
      newsList: [],
    };
  },
  mounted() {
    this.$api.getNewsList({ category: "all" }).then((res) => {
      this.newsList = res.data;
    });
  },
  methods: {
    onchange() {
      this.$api.getNewsList({ category: this.category }).then((res) => {
        this.newsList = res.data;
      });
    },
    deleteRow(index, rows) {
      let delNew = rows[index];
      this.$api.deleteNew({ _id: delNew._id }).then((res) => {
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