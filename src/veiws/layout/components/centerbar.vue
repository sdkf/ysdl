/* eslint-disable */
<template>
  <div class="center">
    <transition name="move" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'centerbar'
  }
</script>

<style scoped>

</style>
