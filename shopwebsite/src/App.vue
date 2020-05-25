<template lang='pug'>
  div(id="app")
    el-row
      el-col(:span='4')
        div.topNav
          div
            p
            p
            p
          h2 FLAT
            span LAB
        div.nav
          div(v-for='item in nav' :key='item.id')
            span(class='iconfont' v-html='item.icon')
            span(v-text='item.name')
            span {{item.add==undefined? '+':item.add}}
            router-link(v-for='option in item.list' :key='option.id' :to='option.path' tag='div') {{option.name}}
      el-col(:span='20')
        div.box
          div.userInfo
            div.left
              div(v-for='item in info' :key='item.id')
                span(class='iconfont' v-html='item.icon')
                span(:style='`background:${item.yanse};`' v-text='item.num')
            div.right
              span(class='iconfont' v-html='"&#xe505;"')
              div.user
                div.img(style='background:gold;width:30px;height:30px')
                span {{`Jhon Doue`}}
                span(class='iconfont' v-html='"&#xe618;"')
          div.view
            router-view
          div.copyright {{`2013 ©FlatLab by vectorLab`}}
</template>
<script>
export default {
  data() {
    return {
      nav: [
        { id: 1, name: "layouts", icon: "&#xe627;" },
        { id: 2, name: "UI Elements", icon: "&#xe637;" },
        { id: 3, name: "Components", icon: "&#xe7c3;" },
        { id: 4, name: "Form stuff", icon: "&#xe616;" },
        { id: 5, name: "Data tables", icon: "&#xe612;" },
        { id: 6, name: "Mail", icon: "&#xe605;" },
        { id: 7, name: "Data tables", icon: "&#xe612;" },
        { id: 8, name: "Mail", icon: "&#xe605;" },
        { id: 9, name: "Data tables", icon: "&#xe612;" },
        { id: 10, name: "Mail", icon: "&#xe605;" },
        { id: 11, name: "Data tables", icon: "&#xe612;" },
        { id: 12, name: "Mail", icon: "&#xe605;" },
        { id: 13, name: "Data tables", icon: "&#xe612;" },
        { id: 14, name: "Mail", icon: "&#xe605;" },
        { id: 15, name: "Data tables", icon: "&#xe612;" },
        { id: 16, name: "Mail", icon: "&#xe605;" },
        { id: 17, name: "Mail", icon: "&#xe605;" },
        { id: 18, name: "Charts", icon: "&#xe629;" },
        {
          id: 19,
          name: "shop",
          list: [
            { id: 19.1, name: "List View", path: "/" },
            { id: 19.2, name: "Details View", path: "/details" }
          ],
          icon: "&#xe55e;",
          add: "-"
        },
        { id: 20, name: "Google Maps", icon: "&#xe673;", add: "" },
        { id: 21, name: "Chat Room", icon: "&#xe697;" },
        { id: 22, name: "Exte", icon: "&#xe61c;" },
        { id: 23, name: "Login Page", icon: "&#xe61e;", add: "" },
        { id: 24, name: "Exte", icon: "&#xe61c;" },
        { id: 25, name: "Mutli level Menu", icon: "&#xe61b;" }
      ],
      info: [
        { id: 1, icon: "&#xe6eb;", yanse: "#A9D86D", num: 6 },
        { id: 2, icon: "&#xe60c;", yanse: "#FC6C6D", num: 5 },
        { id: 3, icon: "&#xe50e;", yanse: "#F6CA25", num: 7 }
      ]
    };
  }
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .el-row {
    width: 100%;
    height: 100%;
    .el-col {
      height: 100%;
    }
    .el-col:nth-child(1) {
      display: flex;
      flex-direction: column;
      .topNav {
        height: 40px;
        line-height: 40px;
        div {
          width: 26px;
          float: left;
          margin-top: 4.5px;
          margin-left: 10px;
          p {
            width: 26px;
            border: 1px solid black;
            border-left: none;
            border-right: none;
            margin-top: 5px;
          }
        }
        h2 {
          margin-left: 50px;
          span {
            color: #fc6c6e;
          }
        }
      }
      .nav {
        flex: 1;
        background: #2a3542;
        overflow-y: auto;
        overflow-x: hidden;
        div {
          height: 44px;
          line-height: 44px;
          box-sizing: border-box;
          padding-left: 10px;
          box-sizing: border-box;
          color: #889ca9;
          span:nth-child(2) {
            margin-left: 10px;
          }
          span:nth-child(3) {
            float: right;
            margin-right: 10px;
          }
        }
        div:nth-child(19) {
          width: 95%;
          height: 132px;
          margin: 0 auto;
          border-radius: 4px;
          background: #35404d;
          padding-left: 5px;
          .iconfont {
            color: orangered;
          }
          span:nth-child(3) {
            margin-right: 10px;
          }
          div {
            padding-left: 25px;
            box-sizing: border-box;
            cursor: pointer;
          }
          .router-link-exact-active {
            color: orangered;
          }
        }
      }
    }
    .el-col:nth-child(2) {
      .box {
        height: 100%;
        display: flex;
        flex-direction: column;
        .userInfo {
          height: 40px;
          line-height: 40px;
          padding-bottom: 10px;
          .left {
            height: 100%;
            float: left;
            div {
              display: inline-block;
              height: 100%;
              width: 30px;
              position: relative;
              margin-left: 30px;
              span:nth-child(2) {
                display: inline-block;
                width: 30px;
                height: 20px;
                border-radius: 10px;
                text-align: center;
                line-height: 20px;
                font-weight: 600;
                position: absolute;
                top: 2px;
              }
            }
          }
          .right {
            float: right;
            height: 40px;
            line-height: 40px;
            margin-right: 10px;
            span:nth-child(1) {
              margin-right: 20px;
            }
            .user {
              float: right;
              height: 40px;
              line-height: 40px;
              display: flex;
              align-items: center;
              border: 1px solid rgb(191, 216, 218);
              padding: 0 5px;
              div {
                display: inline-block;
                margin-right: 5px;
              }
              span:nth-child(2) {
                margin-right: 5px;
              }
            }
          }
        }
        .view {
          flex: 1;
          overflow-y: auto;
          background: #f1f2f7;
          padding: 5px 0 0 5px;
        }
        .copyright {
          height: 30px;
          line-height: 30px;
          color: #fff;
          font-weight: 600;
          text-align: center;
          background: #5b6e84;
        }
      }
    }
  }
}
</style>
