<template>
<div>
  <h2>Items in the Cart</h2>
  <table :class=handleTableVisibility >
    <thead>
      <th>Product Name</th>
      <th>Price</th>
      <th>Amount</th>
      <th>total Price</th>
    </thead>
    <tr v-for="item in items" :key="item.id">
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td><input type="number" name="" v-model=item.amount min="1" :max= "item.left"></td>
      <td>{{ item.total }}</td>
    </tr>
  </table>
</div>
</template>

<script type="text/javascript" src="./cartPart.js"></script>
<!--这里引入样式表和html中不同-->
<style type="text/css">
@import './cartPart.css'
</style>
