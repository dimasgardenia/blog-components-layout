<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script>
import postarticle from '@/components/postarticle'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    postarticle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
