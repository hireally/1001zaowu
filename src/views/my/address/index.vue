<template>
  <div class="address">
    <myheader title="收货地址">
      <div class="add-address-btn"></div>
    </myheader>
    <ScrollLayer class="collect-content">
      <div class="address-card" v-for="address in addressList" :key="address.id">
        <div class="address-profile">{{address.name[0]}}</div>
        <div class="address-info">
          <div class="address-name">{{address.name}}</div>
          <div class="address-detail">地址: {{address.detail}}</div>
          <div class="address-tel">联系方式: {{address.tel}}</div>
        </div>
        <div class="address-edit">
          <span>编辑</span>
        </div>
      </div>
    </ScrollLayer>
  </div>
</template>

<script>
import ScrollLayer from "@/components/ScrollLayer.vue";
import myheader from "../components/header.vue";

export default {
  name: "address",
  components: {
    ScrollLayer,
    myheader
  },
  data() {
    return {
      addressList: [
        {
          id: 23424242,
          name: "东勋",
          detail: "雨溪",
          tel: "011-2323-8213"
        },
        {
          id: 234324,
          name: "至安",
          detail: "大雄宝殿",
          tel: "011-1313-8213"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.address {
  height: 100%;
  background: #354e44;
}
.add-address-btn {
  position: absolute;
  width: 23px;
  height: 23px;
  right: 5px;
  top: 2px;
  background: url("../../../assets/imgs/icons/icon-add.png") center/100%
    no-repeat;
}
.collect-content {
  margin-top: 10px;
  height: calc(100% - 20px);
  background: #f1ece7;
  border-radius: 20px;
  .address-card {
    margin: 20px;
    display: flex;
    padding: 30px;
    background: white;
    border-radius: 20.4px;
    font-size: 11px;
    color: #8d8d8d;
    align-items: center;
    .address-info {
      text-align: start;
      flex-grow: 1;
      padding-left: 20px;
      .address-name {
        font-size: 13px;
        color: #3e3e3e;
      }
      & > div {
        margin-bottom: 5px;
      }
    }
    .address-profile {
      background: #354e44;
      width: 41px;
      height: 41px;
      border-radius: 50%;
      font-size: 18px;
      color: #ffffff;
      line-height: 41px;
    }
    .address-edit {
      display: flex;
      align-items: center;
      span {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 2px;
          background: #8d8d8d;
          left: -10px;
          top: 0;
        }
      }
    }
  }
}
</style>