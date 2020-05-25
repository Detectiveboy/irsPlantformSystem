<template lang="pug">
    div.home
        el-row
            el-col(:span="6")
              el-row
                  el-col(:span="12")
                      div.headPhoto
                  el-col(:span="12")
                      div.userInfo
                          p 用户A
                          p 部门A
            el-col(:span="17")
              div(v-for='item in dashboard' :key='item.id')
                span {{item.msg}}
                span {{item.time}}
        div.tousu
          div.title
            span 我的投诉
            span 我要投诉
          div.dashboard
        div.zixun
          div.title
            span 我的咨询
            span 我要资讯
          div.dashboard
</template>
<script>
export default {
  data() {
    return {
      dashboard: [
        { id: 1, msg: "关于召开xxxx研讨会的通知", time: "2014-09-01" },
        { id: 2, msg: "关于中秋国庆放假的通知", time: "2014-09-04" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .el-row {
    width: 100%;
    height: 160px;
    .el-col {
      border: 1px solid black;
      height: 100%;
      div {
        height: 100%;
      }
      .el-col:nth-child(1) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .headPhoto {
          width: 70%;
          height: 70%;
          background: orchid;
        }
      }
      .el-col:nth-child(2) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .userInfo {
          margin-left: 20px;
          width: 70%;
          height: 70%;
          border-bottom: none;
        }
      }
    }
    .el-col:nth-child(1) {
      .el-row {
        width: 100%;
        height: 100%;
        .el-col {
          border: none;
        }
      }
    }
    .el-col:nth-child(2) {
      float: right;
      overflow-y: auto;
      div {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid black;
        span:nth-child(2) {
          float: right;
          margin-right: 20px;
        }
      }
    }
  }
  .tousu,
  .zixun {
    width: 100%;
    height: 160px;
    border: 1px solid black;
    margin-top: 10px;
    .title {
      width: 100%;
      height: 30px;
      border-bottom: 1px solid black;
      line-height: 30px;
      span:nth-child(2) {
        float: right;
        margin-right: 20px;
        text-decoration: underline;
      }
    }
  }
}
</style>