const state = {
  productsList: [
    { id: 1,
      name: 'iPhone',
      price: 99,
      left: 1
    },
    { id: 2,
      name: 'iPad',
      price: 23,
      left: 1
    },
    { id: 3,
      name: 'iPod',
      price: 34,
      left: 2
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
