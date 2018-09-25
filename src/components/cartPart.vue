<template>
<div>
  <h2>Items in the Cart</h2>
  <div class="content">
    <table :class=handleTableVisibility >
      <thead>
        <th>Product Name</th>
        <th>Price</th>
        <th>Amount</th>
        <th>total Price</th>
      </thead>
      <tr v-for="(item, index) in items" :id='item.id'>
        <td>{{ item.name }}</td>
        <td>${{ item.price }}</td>
        <td><input type="number" min="1" :max= "item.left"  @input='updateEachTotalPrice($event)' v-model=item.amount></td>
        <td>{{ item.total }}</td>
        <td><button @click='deleteFromCart(item)'>Delete from cart</button></td>
      </tr>
  </table>
  </div>
  
</div>
</template>

<script type="text/javascript" src="./cartPart.js"></script>
<!--这里引入样式表和html中不同-->
<style type="text/css">
@import './style.css'
</style>
