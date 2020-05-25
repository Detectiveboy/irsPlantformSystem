<template lang="pug">
    div.details
        el-row
            el-col(:span='12')
                div.img
                    img(src='../assets/img/heart.jpg')
                ul
                    li
                        img(src='../assets/img/heart.jpg')
                    li
                        img(src='../assets/img/heart.jpg')
                    li
                        img(src='../assets/img/heart.jpg')
                    li
                        img(src='../assets/img/heart.jpg')
            el-col(:span='12')
                h5 {{shopData.gName}}
                p {{shopData.gInfo}}
                div
                    span Categorigs:
                    span Shirts
                div
                    span Tags:
                    span {{shopData.gTags}}
                div
                    span Price:
                    span {{`$${shopData.gOldprica}`}}
                    span {{`$${shopData.gNewprica}`}}
                div
                    h5 Quantity:
                    input(type='text' value=1)
                el-button(type="danger" plain)
                    span(class='iconfont' v-html='`&#xe55e;`' style='color:#fff')
                    span Add to Cart
                br
                el-button(type="primary" plain @click='back') backShoping
        el-tabs(v-model="activeName" type="card")
            el-tab-pane(label="Description" name="first")
                h4 Product Description
                p {{shopData.gInfo}}
            el-tab-pane(label="Reviews" name="second")
                h1 I'm sorry,not found good
        el-row
            el-col(:span='7' v-for='count in 3' :key='count')
                div.card
                    div.img
                      img(src='../assets/img/heart.jpg')
                      div.icon
                        span(class='iconfont' v-html='`&#xe55e;`' style='color:#fff')
                    p {{shopData.gName}}
                    p {{shopData.gNewprica}}
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      shopData: {},
      activeName: "first"
    };
  },
  beforeMount() {
    this.shopData = this.$store.state.shopInfo;
  },
  methods: {
    back() {
      this.$emit("showShop");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>