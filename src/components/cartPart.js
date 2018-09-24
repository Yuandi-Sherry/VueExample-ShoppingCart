import {mapGetters} from 'vuex'

export default {
  name: 'cartPart',
  computed: {
    ...mapGetters({
      items: 'itemsList',
      handleTableVisibility: 'handleCartVisibility',
      message: 'message'
    }) 
  }
}
