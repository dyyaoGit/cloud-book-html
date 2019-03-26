<template>
  <div class="container">
    <Loadmore :top-method="loadTop"
              :bottom-method="loadBottom"
              :bottom-all-loaded="allLoaded"
              :bottomDistance="2"
              ref="loadmore">
      <div class="header">
        <Swiper :options="swiperData"/>
      </div>
      <div class="content-wrap mt-18" v-if="contentData.length > 0">
        <Content :options="item" v-for="(item, index) in contentData" :key="index" />
      </div>
    </Loadmore>
  </div>
</template>

<script>
  import Swiper from '@/components/swiper'
  import Content from './components/content'
  import moment from 'moment'
  import { Loadmore } from 'mint-ui'
  export default {
    name: "index_back",
    components: {
      Swiper,
      Content,
      Loadmore
    },
    data () {
      return {
        contentData: [],
        swiperData: [],
        allLoaded: false,
        pn: 1
      }
    },
    methods: {
      getContentData () {
        console.log(1);
        return new Promise((resolve, reject) => {
          this.$axios.get(this.$api.categoryBook,{params: {
              pn: this.pn,
              size: 2,
              booksSize: 2
            }}).then(res => {
            let resData = res.data.map(item => {
              item.books = item.books.map(it => {
                it.updateTime = moment(new Date(it.updateTime)).format('YYYY年M月D日')
                return it
              })

              return item
            })
            this.contentData = [...this.contentData, ...resData]
            if(resData.length <=0 ){
              this.allLoaded = true
            } else {
              this.$nextTick(() => {
                console.log(2);
                this.allLoaded = false
                this.$refs.loadmore.onBottomLoaded()
              })
            }
            resolve()
          })
        })
      },
      getSwiperData () {
        return new Promise((resolve, reject) => {
          this.$axios.get(this.$api.swiper).then(res => {
            this.swiperData = res.data
            resolve()
          })
        })
      },
      async loadTop () {
        this.pn = 1
        this.contentData = []
        this.swiperData = []
        this.allLoaded = false
        await  this.getSwiperData()
        await this.getContentData()
        this.$refs.loadmore.onTopLoaded();
      },
      async loadBottom () {
        await this.pn++;
        await this.getContentData()
      }
    },
    created () {
      this.getSwiperData()
      this.getContentData()
    }
  }
</script>

<style scoped lang="scss">
  @import '../../globalStyle/index.scss';
  .container {
    font-size: 14px;
    padding: px2-rem(18);
    padding-bottom: 55px;

    .header {
      height: px2-rem(400);
    }
  }
</style>
