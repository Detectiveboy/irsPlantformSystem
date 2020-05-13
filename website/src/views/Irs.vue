<template lang='pug'>
  div.irs
    el-row
      el-col(:span='6')
        div(v-for='item in nav' :key='item.id')
          router-link(:to='item.path') {{item.name}}
          p(v-for='option in item.detail')
            router-link(:to='option.path') {{option.name}}
      el-col(:span='17')
        router-view
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { id: 1, name: "角色管理", path: "/irs/" },
        { id: 2, name: "系统用户管理", path: "/irs/systemuserm" },
        { id: 3, name: "信息发布管理", path: "/irs/infopublishm" },
        { id: 4, name: "投诉受理管理", path: "/irs/tousum" },
        { id: 5, name: "纳税咨询管理", path: "/irs/zixunm" },
        { id: 6, name: "易告知管理", path: "/irs/easyknowm" },
        {
          id: 7,
          name: "服务预约管理",
          path: "/irs/yuyuething",
          detail: [
            { id: 1, name: "预约事项", path: "/irs/yuyuething" },
            { id: 2, name: "预约服务", path: "/irs/yuyueserve" }
          ]
        },
        { id: 8, name: "服务调查管理", path: "/irs/querym" }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      const navTag = document.querySelectorAll("#nav a")[4];
      navTag.style.background = "#ccccff";
    });
  },
  beforeDestroy() {
    const navTag = document.querySelectorAll("#nav a")[4];
    navTag.style.background = "#fff";
  }
};
</script>
<style lang="scss" scoped>
.irs {
  width: 100%;
  height: 100%;
  .el-row {
    width: 100%;
    height: 100%;
    .el-col {
      height: 100%;
    }
    .el-col:nth-child(1) {
      border: 1px solid black;
      div {
        padding: 5px 0 5px 5px;
        border-bottom: 1px solid black;
        a {
          color: black;
        }
        .router-link-exact-active {
          font-weight: bold;
        }
      }
      div:nth-child(7) {
        padding: 0;
        text-indent: 5px;
        padding: 5px 0;
        p {
          padding: 5px 0 0 15px;
          border-top: 1px solid black;
          .router-link-exact-active {
            font-weight: bold;
          }
        }
        p:nth-child(2) {
          padding-bottom: 5px;
        }
      }
    }
    .el-col:nth-child(2) {
      float: right;
    }
  }
}
</style>
