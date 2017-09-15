<template>
  <div id="app">
    <!-- <mainhead></mainhead> -->
    <mainnav></mainnav>
    <router-view></router-view>
    <mainfeet></mainfeet>
  </div>
</template>

<script>
import Head from '@/components/Head'
import Nav from '@/components/Nav'
import Feet from '@/components/Feet'
export default {
  name: 'app',
  components:{
    mainhead:Head,
    mainnav: Nav,
    mainfeet:Feet,
  }
}
</script>

<style>

</style>
