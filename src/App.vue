<template>
  <div id="app">
    <mainhead></mainhead>
    <mainnav></mainnav>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from '@/components/Head'
import Nav from '@/components/Nav'
export default {
  name: 'app',
  components:{
    mainhead:Head,
    mainnav: Nav,
  }
}
</script>

<style>

</style>
