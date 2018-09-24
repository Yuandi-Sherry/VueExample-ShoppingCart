import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'productsPart',
  computed: {
    ...mapGetters({
      products: 'productsList',
      handleProductsVisibility: 'handleProductsVisibility',
      productMsg: 'productMsg'
    })
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
