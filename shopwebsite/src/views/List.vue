<template lang="pug">
    div.list
        el-row
            el-col(:span='4')
              el-input(v-model="searchVal" placeholder="Keyword Search")
              h5 Category
              el-menu(default-active="1" class="el-menu-vertical-demo")
                el-submenu(v-for='(item,index) in navData' :index="String(item.cId)" :key='item.cId')
                  template(slot="title")
                    span {{`>${item.cName}`}}
                  el-divider
                  el-menu-item-group
                    el-menu-item(:index='`${item.cId}-${Number(index)+1}`' v-for='(option,index) in item.list' :key='option.cId' @click='jump(option.cId)') {{`-${option.cName}`}}
            el-col(:span='19')
              div.showShop(v-if='flag')
                div.selecte
                  div.left
                    span Sort By
                    el-select(size='small' v-model="sortByValue" placeholder="Defalut Shoting")
                      el-option(v-for="item in sortBy" :key="item.value" :label="item.label" :value="item.value")
                    span Show
                    el-select(size='small' v-model="showValue" placeholder="Result Per Page")
                      el-option(v-for="item in show" :key="item.value" :label="item.label" :value="item.value")
                  div.right
                    el-pagination(:small='true' layout="prev, pager, next" :total="allAge*10" @current-change='(age)=>{this.sendAgeRequest(this.cId, age);}')
                  div(style='clear:both')
                div.shop
                  div.card(v-for='item in shopData' :key='item.gId' @click='detailCli(item.gId)')
                    div.img
                      img(src='../assets/img/heart.jpg')
                      div.icon
                        span(class='iconfont' v-html='`&#xe55e;`' style='color:#fff')
                    p {{item.gName}}
                    p {{item.gNewprica}}
              detail(v-if='!flag' @showShop='chengeFlag')
</template>
<script>
import detail from "@/components/Detail.vue";
export default {
  components: {
    detail
  },
  data() {
    return {
      flag: true,
      searchVal: "",
      navData: [],
      shopData: [],
      sortByValue: "",
      showValue: "",
      sortBy: [
        {
          value: "选项1",
          label: "瞎搞"
        },
        {
          value: "选项2",
          label: "随便"
        },
        {
          value: "选项3",
          label: "瞎说"
        }
      ],
      show: [
        {
          value: "1",
          label: "one"
        },
        {
          value: "2",
          label: "two"
        },
        {
          value: "3",
          label: "three"
        }
      ],
      cId: 12,
      allAge: 3
    };
  },
  beforeMount() {
    this.axios({
      method: "get",
      url: "/tas/store/getClasses"
    })
      .then(data => {
        let finData = [];
        for (const item of data.data) {
          if (item.cFid === 0) {
            finData.push(item);
            item.list = [];
          }
        }
        for (const item of data.data) {
          for (const option of finData) {
            if (!(item.cFid === 0)) {
              if (item.cFid === option.cId) {
                option.list.push(item);
              }
            }
          }
        }
        this.navData = finData;
      })
      .catch(err => {
        console.log(err);
      });
    this.sendAgeRequest(12, 1);
  },
  methods: {
    jump(cId) {
      this.cId = cId;
      this.sendAgeRequest(cId, 1);
    },
    sendAgeRequest(cId, age) {
      this.axios({
        method: "get",
        url: "tas/store/getGoodsByPage",
        params: {
          classesId: cId,
          current: age
        }
      })
        .then(data => {
          this.allAge = data.data.pages;
          this.shopData = data.data.records;
        })
        .catch(err => {
          console.log(err);
        });
    },
    detailCli(id) {
      this.axios({
        method: "get",
        url: "/tas/store/getGoodsInfo",
        params: {
          goodsId: id
        }
      })
        .then(data => {
          this.$store.state.shopInfo = data.data;
          this.flag = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    chengeFlag() {
      this.flag = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  .el-row {
    .el-col:nth-child(1) {
      .el-input {
        padding: 5px;
        background: #fff;
        box-sizing: border-box;
      }
      h5 {
        background: #fff;
        margin-top: 10px;
        box-sizing: border-box;
        padding-left: 10px;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid rgb(185, 180, 180);
      }
      .el-menu {
        .el-submenu {
          .el-divider {
            margin: 0;
          }
          .is-active {
            color: rgb(228, 124, 124);
          }
        }
      }
    }
    .el-col:nth-child(2) {
      overflow-x: hidden;
      float: right;
      .showShop {
        .selecte {
          padding: 10px;
          box-sizing: border-box;
          background: #fff;
          .left {
            float: left;
            span {
              margin-right: 10px;
            }
            span:nth-child(3) {
              margin-left: 10px;
            }
          }
          .right {
            float: right;
          }
        }
        .shop {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          margin-right: -20px;
          box-sizing: border-box;
          .card {
            width: 205px;
            height: 230px;
            margin: 0 20px 10px 0;
            background: #fff;
            .img {
              width: 100%;
              height: 150px;
              position: relative;
              img {
                width: 100%;
                height: 100%;
              }
              .icon {
                width: 30px;
                height: 30px;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                bottom: -15px;
                border-radius: 50%;
                background: red;
                line-height: 30px;
                text-align: center;
              }
            }
            p {
              height: 25px;
              text-align: center;
              line-height: 25px;
            }
            p:nth-child(2) {
              margin-top: 20px;
            }
            p:nth-child(3) {
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>