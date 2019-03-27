<template>
  <div class="content">
    <div class="content-item">
      <div class="content-item-row1">
        <h2 class="title" v-text="options.title"></h2>
        <router-link :to="{name: 'categoryMore', params: {id: options._id}}" class="more">更多...</router-link>
      </div>

      <div class="content-item-row2" v-for="(item, index) in options.books" :key="index" @click="handleJump(item)">
        <div class="item-img-wrap">
          <img :src="item.img" :alt="item.img" class="item-img">
        </div>
        <div class="item-article">
          <h3 class="item-article-title">
            {{item.title}}
          </h3>
          <div class="article-preview">
            {{item.desc}}
          </div>
          <div class="desc">
            <div class="author">
              {{item.author}}
            </div>
            <div class="date">
              {{item.updateTime}}
            </div>
            <div class="read-num">
              {{item.looknums}}人在看
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: Object
    },
    methods: {
      handleJump (item) {
        this.$router.push({
          name: 'details',
          params: {
            id: item._id
          }
        })
      }
    },
    created () {
      console.log(this.options);
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../globalStyle/index';

  .content {
    font-size: 16px;
    .content-item {
      margin-top: px2-rem(40);
      .title {
        padding-left: 10px;
        font-size: 18px;
        font-weight: 600;
      }
      .more {
        font-size: 12px;
        color: #888;
        text-decoration: none;
      }
    }
    .content-item-row1 {
      padding: 2px 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-left: 4px solid #000;
    }
    .content-item-row2 {
      margin-top: px2-rem(20);
      display: flex;
      justify-content: space-between;

      .item-img-wrap {
        width: px2-rem(200);
        height: px2-rem(266);

        .item-img {
          height: 100%;
        }
      }
      .item-article {
        position: relative;
        flex: 1;
        margin-left: px2-rem(20);
        height: px2-rem(266);

        .article-preview {
          margin-top: px2-rem(20);
          line-height: 1.5;
          font-size: 12px;
          color: #555;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .desc {
          color: #555;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }
      }
    }
  }
</style>
