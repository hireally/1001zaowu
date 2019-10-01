<template>
  <div class="article">
    <myheader title="我的文章" />
    <ScrollLayer class="article-content">
      <div class="article-cols">
        <div class="article-col-left">
          <div class="article-card" v-for="article in articleLeftList" :key="article.id">
            <img :src="article.cover" alt />
            <div class="article-info">
              <div class="article-title">{{article.title}}</div>
              <div class="article-collect">{{article.collectCount}}已收藏</div>
              <div class="article-desc">{{article.desc}}</div>
            </div>
          </div>
        </div>
        <div class="article-col-right">
          <div class="article-card" v-for="article in articleRightList" :key="article.id">
            <img :src="article.cover" alt />
            <div class="article-info">
              <div class="article-title">{{article.title}}</div>
              <div class="article-collect">{{article.collectCount}}已收藏</div>
              <div class="article-desc">{{article.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </ScrollLayer>
  </div>
</template>

<script>
import ScrollLayer from "@/components/ScrollLayer.vue";
import myheader from "../components/header.vue";

export default {
  name: "myArticle",
  components: {
    ScrollLayer,
    myheader
  },
  data() {
    return {
      articleList: [
        {
          id: 12321321312,
          cover: require("../../../assets/imgs/my/article/article-cover.png"),
          desc: "一把有温度的好椅子是…",
          collectCount: 55,
          title: "安宁吊扇"
        },
        {
          id: 123251321312,
          cover: require("../../../assets/imgs/my/article/article-cover.png"),
          desc:
            "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, delectus nisi, quas fugit quod iste eligendi dolorem ex laboriosam mollitia enim rerum molestiae totam soluta sit laborum asperiores quia distinctio.",
          collectCount: 55,
          title: "安宁吊扇"
        },
        {
          id: 123211321312,
          cover: require("../../../assets/imgs/my/article/article-cover.png"),
          desc: "一把有温度的好椅子是当山峰大杀四方水电费第三方…",
          collectCount: 55,
          title: "安宁吊扇"
        },
        {
          id: 123213321312,
          cover: require("../../../assets/imgs/my/article/article-cover.png"),
          desc: "一把有温度的好椅子是…",
          collectCount: 55,
          title: "安宁吊扇"
        },
        {
          id: 123213221312,
          cover: require("../../../assets/imgs/my/article/article-cover.png"),
          desc: "一把有温度的好椅子是…",
          collectCount: 55,
          title: "安宁吊扇"
        }
      ]
    };
  },
  computed: {
    articleLeftList: function() {
      return this.articleList.filter((ele, index) => index % 2 == 0);
    },
    articleRightList: function() {
      return this.articleList.filter((ele, index) => index % 2 == 1);
    }
  }
};
</script>

<style lang='scss' scoped>
.article {
  height: 100%;
  background: #354e44;
  .article-content {
    margin-top: 10px;
    height: calc(100% - 20px);
    background: #f1ece7;
    border-radius: 20px;
    .article-cols {
      margin-top: 15px;
      display: flex;
      justify-content: space-evenly;
      & > div {
        flex-basis: 40%;
      }
      .article-card {
        background: white;
        margin: 10px 0;
        background: #ffffff;
        box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.06);
        border-radius: 5px;
        .article-info {
          margin: 10px 0;
          text-align: start;
          padding: 10px 15px;
          font-size: 11px;
          color: #b1b1b1;
          letter-spacing: 0.79px;
          .article-title {
            font-size: 13px;
            color: #3e3e3e;
          }
          .article-desc {
            margin-top: 15px;
          }
        }
      }
      img {
        width: 158px;
        height: 119px;
      }
    }
  }
}
</style>