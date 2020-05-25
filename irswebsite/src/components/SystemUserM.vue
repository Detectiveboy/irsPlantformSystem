<template lang="pug">
    div.usermanage
        div.container(v-if='show')
            div.serch
                div.left
                    label(for='serchVal') 角色名称
                        input(type='text' v-model.lazy='serchValue' id='serchVal')
                    button 查询
                div.right
                    div
                        button(@click='add()') 新增
                        button(@click='queryDelete') 删除
                        button 导出
                        input(type='text' v-model='exportValue')
                        button 浏览...
                    button 导入
            div.info
                div.warp
                    div.table
                        el-table(:data="tableData" border style="width: 100%" empty-text='暂无角色')
                            el-table-column(width="50")
                                template(slot-scope="scope")
                                    input(type='checkbox' v-model='checkboxData' :value='scope.row.id')
                            el-table-column(prop="username" label="用户名")
                            el-table-column(prop="account" label="账号")
                            el-table-column(prop="department" label="所属部门")
                            el-table-column(prop="gender" label="性别")
                            el-table-column(prop="email" label="电子邮箱")
                            el-table-column(prop="methods" label="操作")
                                template(slot-scope="scope")
                                    el-link(type='success' @click="edit(scope.$index, scope.row)") 编辑
                                    el-link(style='margin-left:10px;' @click="remove(scope.$index, scope.row)") 删除
                div.pageInfo
                    span {{`共${pageNum}条记录`}}
        div.delog(v-if='flag')
            h1 新增/编辑用户
            div.warp
                div.form
                    el-row
                        el-col(:span="6")
                            p(v-for='(item,index) in formOptions' :key='index' v-text='item')
                        el-col(:span='18')
                            div
                                el-select(v-model="delogForm.department" placeholder="请选择")
                                    el-option( v-for="item in options" :key="item.value" :label="item.label" :value="item.value")
                            div
                                input(type='text' v-model.lazy='delogForm.username')
                            div
                                input(type='text' v-model.lazy='delogForm.account')
                            div
                                input(type='text' v-model.lazy='delogForm.password')
                            div
                            div
                            div
                            div
                            div
                            div
                            div
                            div
</template>
<script>
export default {
  data() {
    return {
      method: "add",
      row: {},
      serchValue: "",
      exportValue: "",
      tableData: [
        {
          id: 1,
          username: "用户A",
          account: "user1",
          department: "部门A",
          gender: "男",
          email: "user1@test.com"
        },
        {
          id: 2,
          username: "用户B",
          account: "user2",
          department: "部门B",
          gender: "女",
          email: "user2@test.com"
        }
      ],
      checkboxData: [],
      flag: false,
      show: true,
      formOptions: [
        "所属部门",
        "用户名",
        "账号",
        "密码",
        "头像",
        "性别",
        "角色",
        "状态",
        "手机号码",
        "电子邮箱",
        "生日",
        "备注"
      ],
      options: [
        {
          value: "选项1",
          label: "部门A"
        },
        {
          value: "选项2",
          label: "部门B"
        },
        {
          value: "选项3",
          label: "部门C"
        },
        {
          value: "选项4",
          label: "部门D"
        },
        {
          value: "选项5",
          label: "部门E"
        }
      ],
      delogForm: {
        username: "",
        account: "",
        password: "",
        department: "",
        gender: "",
        email: "",
        state: "",
        role: "",
        phone: "",
        bothday: "",
        note: ""
      }
    };
  },
  methods: {
    edit(index, row) {
      this.delogShow("edit", row);
    },
    add() {
      this.delogShow("add", {});
    },
    submit() {
      if (this.method === "add") {
        if (!(this.delogForm.username === "")) {
          if (!(this.delogForm.permissions === [])) {
            if (!(this.delogForm.state === "")) {
              this.delogForm.id = new Date().getTime();
              let obj = JSON.stringify(this.delogForm);
              obj = JSON.parse(obj);
              this.tableData.push(obj);
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
      if (this.method === "edit") {
        if (!(this.delogForm.username === "")) {
          if (!(this.delogForm.permissions === [])) {
            if (!(this.delogForm.state === "")) {
              this.row.username = this.delogForm.username;
              this.row.permissions = this.delogForm.permissions;
              this.row.state = this.delogForm.state;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
      this.delogHidden();
    },
    remove(index, row) {
      this.tableData.splice(index, 1);
    },
    delogShow(method, row) {
      this.flag = true;
      this.show = !this.flag;
      this.delogForm.username = "";
      this.delogForm.permissions = [];
      this.delogForm.state = "";
      if (method === "add") {
        this.method = "add";
        this.row = {};
      }
      if (method === "edit") {
        this.method = "edit";
        this.row = row;
      }
    },
    delogHidden() {
      this.flag = false;
    },
    queryDelete() {
      for (const item of this.checkboxData) {
        for (const option of this.tableData) {
          if (item === option.id) {
            const index = this.tableData.indexOf(option);
            this.tableData.splice(index, 1);
          }
        }
      }
      this.checkboxData = [];
    }
  },
  computed: {
    pageNum() {
      return this.tableData.length;
    }
  },
  created() {
    for (const item of this.tableData) {
      item.permissions = item.permissions.toString();
    }
  },
  updated() {
    for (const item of this.tableData) {
      item.permissions = item.permissions.toString();
    }
  }
};
</script>
<style lang="scss" scoped>
.usermanage {
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .serch {
      width: 100%;
      height: 50px;
      border: 1px solid black;
      line-height: 50px;
      padding: 0 0 0 10px;
      box-sizing: border-box;
      div {
        display: inline-block;
      }
      button {
        padding: 5px 10px;
        background: rgb(211, 204, 204);
        border-radius: 5px;
      }
      button:focus {
        outline: none;
      }
      .left {
        input {
          margin: 0 10px;
          height: 26px;
        }
      }
      .right {
        float: right;
        button {
          margin-right: 10px;
        }
        button:nth-child(6) {
          margin-right: 0;
        }
        input {
          height: 26px;
        }
        button:nth-child(5) {
          position: relative;
          right: 60px;
        }
        div {
          position: relative;
          left: 60px;
        }
      }
    }
    .info {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      .warp {
        flex: 1;
        margin-top: 10px;
        .table {
          height: 100%;
          overflow-y: auto !important;
        }
      }
      .pageInfo {
        height: 50px;
        line-height: 50px;
      }
    }
  }
  .delog {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h1 {
      height: 42px;
      text-align: center;
      padding: 10px 0;
    }
    .warp {
      flex: 1;
      .form {
        height: 461px;
        overflow-y: auto;
        .el-row {
          width: 100%;
          .el-col {
            border: 1px solid black;
          }
          .el-col:nth-child(1) {
            border-right: none;
            p {
              height: 60px;
              line-height: 60px;
              text-align: center;
              border-bottom: 1px solid black;
            }
            p:last-child {
              border-bottom: none;
            }
          }
          .el-col:nth-child(2) {
            div {
              height: 60px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              border-bottom: 1px solid black;
              input {
                height: 31px;
                width: 217px;
              }
            }
            div:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
}
</style>