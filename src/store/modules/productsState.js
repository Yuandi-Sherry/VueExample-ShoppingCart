const state = {
  productsList: [
    { id: 1,
      name: 'iPhone Xs',
      price: 999,
      left: 123
    },
    { id: 2,
      name: 'iPhone XR',
      price: 749,
      left: 1123
    },
    { id: 3,
      name: 'iPhone 8',
      price: 599,
      left: 214
    }]
}

const getters = {
  productsList: state => state.productsList,
  handleProductsVisibility: (state) => {
    if (state.productsList.length === 0) {
      return 'hide'
    } else {
      return 'show'
    }
  },
  productMsg: (state) => {
    if (state.productsList.length !== 0) {
      return 'The products are as follows'
    } else {
      return 'Everything was sold out. Please wait for new arrivals'
    }
  }
}

const mutations = {
}

const actions = {
}

export default{
  state,
  getters,
  mutations,
  actions
}
