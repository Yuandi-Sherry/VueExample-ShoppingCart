<template>
<div>
  <p> {{ message.info }} </p>
  <button @click='checkOut'>check out</button>
  <button @click='clearCart'>clear</button>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'checkOutPart',
  computed: {
    ...mapGetters(['message', 'handleTableVisibility'])
  },
  methods: {
    ...mapActions(['checkOut', 'clearCart'])
  }
}
</script>
