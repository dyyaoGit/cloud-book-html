<template>
  <div class="container">
    <div class="book-msg flex sp-bt"> <!--book-msg start -->
      <div class="img-wrap">
        <img :src="bookData.img" :alt="bookData.img">
      </div>
      <div class="book-msg-right">
        <h2 class="title">{{bookData.title}}</h2>

        <div class="book-details">
          <div class="author">
            作者:  {{bookData.author}}
          </div>
          <div class="look-nums">
            {{bookData.looknums}}人在看
          </div>
          <div class="like">
            {{bookData.startsnums}}人喜欢
          </div>
        </div>
      </div>
    </div> <!--book-msg end -->

    <div class="btns">
      <Button size="small">加入收藏</Button>
      <Button size="small">喜欢</Button>
      <Button size="small">分享好友</Button>
    </div>

    <div class="line"></div>

    <div class="desc">
      <h2 class="title mt-20">简介</h2>

      <div class="desc-content">
        {{bookData.desc}}
      </div>
    </div>

    <div class="show-title">
      <h2 class="title">
        查看目录
        <span>共{{titles.length}}章</span>
      </h2>

      <div class="date">

      </div>
    </div>
  </div>
</template>

<script>
  import {Button} from 'mint-ui'

  export default {
    name: "index",
    components: {
      Button
    },
    data () {
      return  {
        bookData: {},
        titles: []
      }
    },
    methods: {
      getBook () {
        let id = this.$route.params.id
        this.$axios.get(this.$api.getBook + id).then(res => {
          this.bookData = res.data
        })
      },
      getTitles () {
        let id = this.$route.params.id
        this.$axios.get(this.$api.getTitles + id).then(res => {
          this.titles = res.data
        })
      }
    },
    created () {
      this.getBook()
      this.getTitles()
    }
  }
</script>

<style scoped lang="scss">
  @import '../../globalStyle/index';

  .container {
    padding: px2-rem(18);

    .book-msg {
      .img-wrap {
        width: px2-rem(200);
        height: px2-rem(266);
      }
      .book-msg-right {
        margin-left: 10px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
          font-size: 18px;
          color: #333;
          font-weight: 600;
        }

        .book-details {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: 10px;
          height: px2-rem(180);
          color: #555;
          font-size: 12px;
        }
      }
    }

    .btns {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;

      /deep/ .mint-button-text {
        font-size: 12px;
        color: #444;
      }
      /deep/ .mint-button {
        width: 80px;
        height: 26px;
        line-height: 26px;
        padding: 0;
      }
    }

    .line {
      margin-top: 16px;
      height: 4px;
      background: #e0e0e0;
    }


  }
</style>
