<template>
  <div class="order-card">
    <div class="card-header">
      <div class="order-id">订单编号: {{orderDetail.orderId}}</div>
      <div class="order-state">{{orderDetail.state}}</div>
    </div>

    <div class="order-detail-content">
      <div class="order-image">
        <img :src="orderDetail.itemImage" alt />
      </div>
      <div class="order-detail-display">
        <div class="item-row">
          <div class="item-name">{{orderDetail.itemName}}</div>
          <span>{{orderDetail.itemPrice}}</span>
        </div>
        <div class="item-row">
          <div>编号: {{orderDetail.itemId}}</div>
          <span>{{orderDetail.itemCount}}</span>
        </div>
        <div class="item-row">
          <div>规格: {{orderDetail.itemSize}}</div>
        </div>
        <div class="item-row">
          <div></div>
          <span class="item-total">合计: {{orderDetail.itemPrice*orderDetail.itemCount}}</span>
        </div>
      </div>
    </div>
    <div class="order-action" v-if="!orderDetail.state=='已完成'">
      <button>取消订单</button>
      <button>付款</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-card",
  props: {
    orderDetail: Object
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.order-card {
  box-sizing: border-box;
  width: 336px;
  padding: 11px 18px;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
  border-radius: 12px;
  margin-top: 20px;
  .card-header {
    display: flex;
    justify-content: space-between;
  }
  .order-detail-content {
    display: flex;
    margin: 10px 0;
    .order-image {
      width: 81px;
      height: 81px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .order-detail-display {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-grow: 1;
      .item-row {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: #8d8d8d;
        .item-name {
          font-size: 13px;
          color: #3e3e3e;
          font-weight: bolder;
        }
        .item-total {
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
        }
      }
    }
  }
  .order-action {
    text-align: right;
    vertical-align: middle;
    button {
      margin-left: 16px;
      width: 68px;
      opacity: 0.76;
      border: 1px solid #2d4f43;
      border-radius: 5px;
    }
  }
}
</style>