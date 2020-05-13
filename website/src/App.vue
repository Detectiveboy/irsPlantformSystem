<template lang='pug'>
  div#app
    div.top
      h2 国税协同办公平台
      div#nav
        router-link(v-for='item in nav' :key='item.id' :to='item.path') {{item.name}}
    div.content
      router-view
</template>
<script>
export default {
  data() {
    return {
      nav: [
        { id: 1, name: "个人工作台", path: "/" },
        { id: 2, name: "行政管理", path: "/manage" },
        { id: 3, name: "后勤服务", path: "/serve" },
        { id: 4, name: "在线学习", path: "/study" },
        { id: 5, name: "纳税服务", path: "/irs" },
        { id: 6, name: "我的空间", path: "/my" }
      ]
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  .top {
    width: 100%;
    height: 80px;
    border: 1px solid black;
    h2 {
      width: 100%;
      height: 49px;
      box-sizing: border-box;
      padding-left: 5px;
    }
    #nav {
      width: 100%;
      height: 30px;
      margin-bottom: 1px;
      a {
        display: inline-block;
        width: 100px;
        height: 100%;
        border: 1px solid black;
        text-align: center;
        line-height: 30px;
        border-bottom: none;
        border-left: none;
        color: black;
      }
      .router-link-exact-active {
        background: #ccccff;
      }
    }
  }
  .content {
    margin-top: 10px;
    width: 100%;
    flex: 1;
  }
}
</style>
