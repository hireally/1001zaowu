<template>
  <div class="post-sale">
    <myheader title="申请售后" />
    <ScrollLayer class="collect-content">
      <div class="post-type">
        <p>服务类型</p>
        <div class="type-items">
          <div class="type-item">换货</div>
          <div class="type-item">退货</div>
          <div class="type-item">仅退款</div>
        </div>
      </div>
      <OrderCard :orderDetail="orderDetail" />

      <div class="problem-desc">
        <p>问题描述</p>
        <textarea name="post-sale-problem" cols="30" rows="10" placeholder="请输出你的评价信息"></textarea>
      </div>

      <div class="submit-btn">提交</div>
    </ScrollLayer>
  </div>
</template>

<script>
import ScrollLayer from "@/components/ScrollLayer.vue";
import myheader from "../components/header.vue";
import OrderCard from "../order/components/OrderCard";
export default {
  name: "postSale",
  components: {
    ScrollLayer,
    myheader,
    OrderCard
  },
  data() {
    return {
      orderDetail: {
        orderId: 234234234324,
        state: "已完成",
        itemName: "头层牛皮沙发",
        itemImage: require("../../../assets/imgs/my/article/article-cover.png"),
        itemPrice: 560,
        itemCount: 1,
        itemId: 114534,
        itemSize: "长430X宽522X高848mm1"
      }
    };
  }
};
</script>

<style lang='scss' scoped>
.post-sale {
  background-color: #354e44;
  height: 100%;
  text-align: start;
}
.collect-content {
  margin-top: 10px;
  height: calc(100% - 20px);
  background: #f1ece7;
  border-radius: 20px;
  padding: 20px;
}
.post-type {
  .type-items {
    display: flex;
  }
  .type-item {
    text-align: center;
    width: 62px;
    padding: 5px 0;
    // background: #354e44;
    border: #354e44 1px solid;
    margin-right: 16px;
    border-radius: 5px;
  }
}
textarea {
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
  border-radius: 12px;
  width: 100%;
}
.submit-btn {
  margin: 50px auto;
  width: 268px;
  height: 47px;
  display: grid;
  place-content: center;
  background: #354e44;
  border-radius: 7px;
  font-size: 16px;
  color: white;
}
p {
  font-size: 18px;
  padding: 10px 0;
}
</style>