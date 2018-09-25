import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'cartPart',
  computed: {
    ...mapGetters({
      items: 'itemsList',
      handleTableVisibility: 'handleCartVisibility',
      message: 'message'
    })
  },
  methods: {
  	...mapActions(['deleteFromCart','updateEachTotalPrice'])/*,
  	updateSingleTotalPrice (id, e) {
  		console.log(id);
  		this.$store.commit('updateSingleTotalPrice', e.target.value);
  	}*/
  }
}
