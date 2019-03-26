<template>
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="tab-item-index">
      <i class="iconfont icon-yemian" slot="icon"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="tab-item-learn">
      <i class="iconfont icon-xuexi-" slot="icon"></i>
      我的学习
    </mt-tab-item>
    <mt-tab-item id="tab-item-person">
      <i class="iconfont icon-UserSettings" slot="icon"></i>
      个人中心
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';
  export default {
    name: "tab-bar",
    components: {
      'mt-tabbar': Tabbar,
      'mt-tab-item': TabItem
    },
    data () {
      return {
        selected: 'tab-item-index'
      }
    }
  }
</script>

<style scoped>
  .iconfont {
    font-size: 24px;
  }
</style>
