<template>
<div class="content">
  <h2>Products in Blocks</h2>
  <p> {{ productMsg }} </p>
  <table :class=handleProductsVisibility>
    <thead>
      <th>Product Name</th>
      <th>Price</th>
      <th>Amount Left in Blocks</th>
    </thead>
    <tr v-for="product in products" :key=product.id>
      <td>{{ product.name }}</td>
      <td>${{ product.price }}</td>
      <td>{{ product.left }}</td>
      <td><button @click='addToCart(product)'>Add to cart</button></td>
    </tr>
  </table>
</div>
</template>

<script type="text/javascript" src="./productsPart.js"></script>
<style type="text/css">
@import './style.css'
</style>
