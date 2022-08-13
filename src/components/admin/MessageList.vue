<template>
  <el-table class="table" :data="MessageList" lazy stripe border>
    
    <el-table-column
      prop="name"
      align="center"
      label="姓名"
    ></el-table-column>
    <el-table-column prop="wechat" align="center" label="联系微信">
    </el-table-column>
    <el-table-column
      prop="tel"
      align="center"
      label="联系电话"
    ></el-table-column>
    <el-table-column
      prop="need"
      align="center"
      label="需求"
    ></el-table-column>
    <el-table-column
      prop="time"
      align="center"
      label="留言时间"
    ></el-table-column>
    <el-table-column fixed="right" align="center" label="操作" width="240">
      <template #default="scope">
       <el-button
         v-if="!scope.row.state"
          @click.prevent="read(scope.$index, MessageList)"
          type="danger"
          size="small"
        >
          未联系
        </el-button>
        <el-button
         v-if="scope.row.state"
          type="success"
          size="small"
        >
          已联系
        </el-button>
        <el-button
          @click.prevent="deleteRow(scope.$index, MessageList)"
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
  name: "MessageList",
  data() {
    return {
      MessageList: [],
    };
  },
  mounted() {
    this.$api.getMessage().then((res) => {
      this.MessageList = res.data;
    });
  },
  methods: {
    deleteRow(index, rows) {
      let delNew = rows[index];
      this.$api.deleteMessage({ _id: delNew._id }).then((res) => {
        this.$ElMessage.success("删除成功");
      });
      rows.splice(index, 1); // 只是静态删除
    },
    read(index, rows) {
      let delNew = rows[index];
      this.$api.readMessage({ _id: delNew._id }).then((res) => {
        this.$ElMessage.success("标记已阅读");
      });
      delNew.state= true;
    }
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