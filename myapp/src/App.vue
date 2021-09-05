<template>
  <div id="app">
    <tabbar>

    </tabbar>
    <section>
      <router-view />
      <!-- 路由容器，实际也是一个插槽 -->

    </section>

  </div>
</template>

<script>
import tabbar from './components/Tabbar'
export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  }

}
</script>
<style lang="scss" scoped>

  section{
    margin-bottom: 50px;
  }

</style>
