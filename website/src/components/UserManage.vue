<template lang="pug">
    div.usermanage
        div.serch
            div.left
                label(for='val') 角色名称
                input(type='text' v-model.lazy='serchValue' id='val')
                button 查询
            div.right
                button(@click='add()') 新增
                button(@click='queryDelete') 删除
        div.info
            div.table
                el-table(:data="tableData" border style="width: 100%" empty-text='暂无角色')
                    el-table-column(width="50")
                        template(slot-scope="scope")
                            input(type='checkbox' v-model='checkboxData' :value='scope.row.id')
                    el-table-column(prop="username" label="角色名称")
                    el-table-column(prop="permissions" label="权限")
                    el-table-column(prop="state" label="状态")
                    el-table-column(prop="methods" label="操作")
                        template(slot-scope="scope")
                            el-link(type='success' @click="edit(scope.$index, scope.row)") 编辑
                            el-link(style='margin-left:10px;' @click="remove(scope.$index, scope.row)") 删除
            div.pageInfo
                span {{`共${pageNum}条记录`}}
        div.delog(v-if='flag')
            div.delogCon
                div.form
                    el-row
                        el-col(:span='6')
                            p 角色名称
                            p 权限
                            p 状态
                        el-col(:span='18')
                            div
                                input(type='text' v-model='delogForm.username')
                            div
                                label(v-for='(item,index) in permissions' :key='index')
                                    input(type='checkbox' v-model='delogForm.permissions' :value='item')
                                    span  {{item}}
                            div
                                label
                                    input(type='radio' name='state' v-model='delogForm.state' value='有效')
                                    span 有效
                                label
                                    input(type='radio' name='state' v-model='delogForm.state' value='无效')
                                    span 无效
                div.button
                    button(@click='submit') 提交
                    button(@click='delogHidden') 返回
</template>
<script>
export default {
  data() {
    return {
      method: "add",
      row: {},
      serchValue: "",
      permissions: ["行政管理", "后勤服务", "掌上学习", "廉政教育", "纳税服务"],
      tableData: [
        { id: 1, username: "一般用户", permissions: "我的空间", state: "有效" },
        {
          id: 2,
          username: "管理",
          permissions: [
            "行政管理",
            "后勤服务",
            "掌上学习",
            "廉政教育",
            "纳税服务"
          ],
          state: "有效"
        }
      ],
      checkboxData: [],
      flag: false,
      delogForm: {
        username: "",
        permissions: [],
        state: ""
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
  display: flex;
  flex-direction: column;
  position: relative;
  .serch {
    width: 100%;
    height: 50px;
    border: 1px solid black;
    line-height: 50px;
    padding: 0 10px;
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
      }
    }
    .right {
      float: right;
      button:nth-child(1) {
        margin-right: 10px;
      }
    }
  }
  .info {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .table {
      flex: 1;
      overflow-y: auto;
      margin-top: 10px;
    }
    .pageInfo {
      height: 50px;
      line-height: 50px;
    }
  }
  .delog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(36, 33, 33, 0.5);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    .delogCon {
      width: 80%;
      height: 300px;
      color: black;
      background: #fff;
      .form {
        width: 100%;
        height: 240px;
        box-sizing: border-box;
        padding: 20px;
        .el-row {
          height: 100%;
          .el-col {
            height: 100%;
            border: 1px solid black;
          }
          .el-col:nth-child(1) {
            border-right: none;
            display: flex;
            flex-direction: column;
            p {
              flex: 1;
              border-bottom: 1px solid black;
              line-height: 65.328px;
              text-align: center;
            }
            p:last-child {
              border-bottom: none;
            }
          }
          .el-col:nth-child(2) {
            border-right: none;
            display: flex;
            flex-direction: column;
            div {
              flex: 1;
              border-bottom: 1px solid black;
              line-height: 65.328px;
              text-align: center;
              border-right: 1px solid black;
              padding-left: 10px;
              box-sizing: border-box;
              text-align: left;
              input {
                vertical-align: middle;
              }
            }
            div:nth-child(1) {
              input {
                width: 75%;
                height: 35%;
              }
            }
            div:nth-child(2) {
              label {
                margin-right: 10px;
              }
            }
            div:nth-child(3) {
              label {
                margin-right: 20px;
              }
            }
            div:last-child {
              border-bottom: none;
            }
          }
        }
      }
      .button {
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        button {
          width: 100px;
          height: 30px;
          border-radius: 5px;
        }
        button:focus {
          outline: none;
        }
        button:nth-child(1) {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>