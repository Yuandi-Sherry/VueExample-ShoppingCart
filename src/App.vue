<template>
  <div id="app">
    <productsPart></productsPart>
    <cartPart></cartPart>
    <checkOutPart></checkOutPart>
  </div>
</template>

<script>
import productsPart from './components/productsPart.vue'
import cartPart from './components/cartPart.vue'
import checkOutPart from './components/checkOutPart.vue'
export default {
  name: 'App',
  components: {
    productsPart,
    cartPart,
    checkOutPart
  }
}
</script>

<style type="text/css">
@import './components/style.css'
</style>
