<template>
  <swiper :options="swiperOptions" ref="mySwiper">
    <swiper-slide v-for="(item,index) in options" :key="index">
      <router-link class="swiper-img-wrap" :to="{name: 'details', params: {id: item._id}}">
        <img :src="item.img" class="swiper-img">
        <p class="img-desc">{{item.title}}</p>
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    props: {
      options: Array
    },
    name: "index",
    components: {
      swiper, swiperSlide
    },
    data () {
      return {
        swiperOptions: {
          autoplay: {
            delay: 3000
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>
