<template>
  <div class="wrapper">
    <topbar></topbar>
    <leftbar></leftbar>
    <centerbar></centerbar>
  </div>
</template>

<script>
import { Topbar, Leftbar, Centerbar } from './components/index'
export default {
  name: 'layout',
  components: {
    Topbar,
    Leftbar,
    Centerbar
  },
  computed: {
  }
}
</script>

<style scoped>
</style>