<template>
  <div class="myCard">
    <myheader title="卡包" />
    <ScrollLayer class="collect-content">
      <div class="discount-card" v-for="card in cards " :key="card.id">
        <img class="card-img" :src="card.imgUrl" />
        <div class="card-detail">
          <div class="discount-size">{{card.size}}</div>
          <div class="discount-type">{{card.type}}</div>
          <div class="discount-date">{{card.date}}</div>
        </div>
        <div class="btn-gouse">去使用</div>
      </div>
    </ScrollLayer>
  </div>
</template>

<script>
import ScrollLayer from "@/components/ScrollLayer.vue";
import myheader from "../components/header.vue";

export default {
  name: "myCard",
  components: {
    ScrollLayer,
    myheader
  },
  data() {
    return {
      cards: [
        {
          id: 32432423,
          imgUrl: require("../../../assets/imgs/my/article/article-cover.png"),
          size: "满500减50",
          date: "2019.1.3-2019.5.11",
          type: "店铺优惠券"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.myCard {
  height: 100%;
  background: #354e44;
}
.collect-content {
  margin-top: 10px;
  height: calc(100% - 20px);
  background: #f1ece7;
  border-radius: 20px;
  .discount-card {
    box-sizing: border-box;
    margin: 10px auto;
    background: url("../../../assets/imgs/icons/discount-card.png") center/100%
      no-repeat;
    width: 336px;
    height: 104px;
    padding: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 68px;
      width: 68px;
    }
  }
}
</style>