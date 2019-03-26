<template>
  <div class="container">
    <div class="book-msg flex sp-bt">
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
            {{bookData.starstnums}}人喜欢
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data () {
      return  {
        bookData: {}
      }
    },
    methods: {
      getBook () {
        let id = this.$route.params.id
        this.$axios.get(this.$api.getBook + id).then(res => {
          this.bookData = res.data
        })
      }
    },
    created () {
      this.getBook()
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



  }
</style>
