<template>
  <el-table :data="userList" stripe border height="100%" style="width: 100%" >
    <el-table-column prop="username" fixed  label="用户名" ></el-table-column>
    <el-table-column prop="station"  label="岗位" > </el-table-column>
    <el-table-column prop="tel" label="电话"></el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button
          @click.prevent="deleteRow(scope.$index, userList)"
          type="danger"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "administrator",
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    this.$api.getUser().then((res) => {
      this.userList = res.data;
    });
  },  
  methods: {
      deleteRow(index, rows) {
        let delUser = rows[index];
        this.$api.delUser({_id:delUser._id}).then((res)=>{
           this.$ElMessage.success('删除成功');
        });
        rows.splice(index, 1);  // 只是静态删除

      }
    }
};
</script>

<style>
</style>