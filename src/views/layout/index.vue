<template>
  <div class="layout">
    <router-view />
    <tab-bar />
  </div>
</template>

<script>
  import tabBar from '@/components/tabBar'
  export default {
    components: {
      tabBar
    },
    name: "index"
  }
</script>

<style scoped lang="scss">
</style>
