<template>
  <div class="order-all">
    <OrderCard v-for="order in allOrderList" :orderDetail="order" :key="order.orderId" />
  </div>
</template>

<script>
import OrderCard from "../components/OrderCard";
export default {
  name: "",
  components: {
    OrderCard
  },
  data() {
    return {
      allOrderList: [
        {
          orderId: 234234234324,
          state: "待付款",
          itemName: "头层牛皮沙发",
          itemImage: require("../../../../assets/imgs/my/article/article-cover.png"),
          itemPrice: 560,
          itemCount: 1,
          itemId: 114534,
          itemSize: "长430X宽522X高848mm1"
        },
        {
          orderId: 23423423334324,
          state: "待付款",
          itemName: "头层牛皮沙发",
          itemImage: require("../../../../assets/imgs/my/article/article-cover.png"),
          itemPrice: 560,
          itemCount: 1,
          itemId: 114534,
          itemSize: "长430X宽522X高848mm1"
        },
        {
          orderId: 23423421124,
          state: "待付款",
          itemName: "头层牛皮沙发",
          itemImage: require("../../../../assets/imgs/my/article/article-cover.png"),
          itemPrice: 560,
          itemCount: 1,
          itemId: 114534,
          itemSize: "长430X宽522X高848mm1"
        },
        {
          orderId: 2342342342324,
          state: "待付款",
          itemName: "头层牛皮沙发",
          itemImage: "",
          itemPrice: 560,
          itemCount: 1,
          itemId: 114534,
          itemSize: "长430X宽522X高848mm1"
        },
        {
          orderId: 2342342342,
          state: "待付款",
          itemName: "头层牛皮沙发",
          itemImage: require("../../../../assets/imgs/my/article/article-cover.png"),
          itemPrice: 560,
          itemCount: 1,
          itemId: 114534,
          itemSize: "长430X宽522X高848mm1"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.order-all {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}
</style>