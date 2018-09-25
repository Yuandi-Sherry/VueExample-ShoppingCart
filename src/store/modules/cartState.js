import productsState from './productsState.js'
const state = {
  itemsList: [], // 仅存放货品id和购物车内数目
  finish: false
}

const getters = {
  itemsList: (state, getters) => {
    if (state.itemsList.length !== 0) {
      return state.itemsList.map(({id, amount}) => {
        var item = productsState.state.productsList.find(function (item) {
          return item.id === id
        })
        var total = item.price * amount
        return {
          ...item,
          amount,
          total
        }
      })
    }
    return []
  },
  message: (state, getters) => {
    if (state.itemsList.length === 0) {
      return {info: 'Your cart is empty, please add something'}
    } else if (!state.finish) {
      return {info: 'You have added ' + getters.countTotalAmount + ' items in your cart, and the total price is ' + getters.countTotalPrice + ' dollars. Please check out as soon as possible. '}
    } else {
      return {info: 'You\'ve checked out successfully'}
    }
  },
  countTotalAmount: state => {
    var totalAmount = 0
    if (state.itemsList.length !== 0) {
      state.itemsList.forEach(function (item) {
        totalAmount += item.amount
      })
    }
    return totalAmount
  },
  countTotalPrice: (state, getters) => {
    var totalPrice = 0
    if (state.itemsList.length !== 0) {
      getters.itemsList.forEach(function (item) {
        totalPrice += item.total
      })
    }
    return totalPrice
  },
  handleCartVisibility: (state) => {
  	return cartIsEmpty ? 'show' : 'hide'
  },
  clearButtonState: (state) => {
  	return cartIsEmpty ? 'able' : 'disable'
  }
}

function cartIsEmpty(state) {
	if (state.itemsList.length === 0) {
  		return true
  	} else {
  		return false
  	}
}

const mutations = {
  add (state, product) {
    var inCart = state.itemsList.find(item => item.id === product.id)
    console.log('product.id');
    console.log(typeof(product.id));
    // 货品已经加入购物车
    if (inCart) {

      if (inCart.amount + 1 <= productsState.state.productsList.find(item => item.id === inCart.id).left) {
        inCart.amount++
      }
    } else {
      state.itemsList.push({id: product.id, amount: 1})
    }
  },
  checkOut (state) {
    var idToDelete = []
    productsState.state.productsList.forEach(function (product) {
      if (state.itemsList.find(item => item.id === product.id)) {
        if (product.left - state.itemsList.find(item => item.id === product.id).amount <= 0) {
          idToDelete.push(product.id)
        } else {
          product.left -= state.itemsList.find(item => item.id === product.id).amount
        }
      }
    })
    for (var i = 0; i < idToDelete.length; i++) {
      productsState.state.productsList.splice(getIndex(productsState.state.productsList, idToDelete[i]), 1)
    }
  },
  clearCart (state) {
    state.itemsList.splice(0, state.itemsList.length)
  },
  deleteFromCart (state, item) {
  	state.itemsList.splice(getIndex(state.itemsList, item),1)
  },
  updateEachTotalPrice (state, para) {
  	var inCart = state.itemsList.find(item => item.id == para.id)
  	console.log(inCart);
  	inCart.amount = para.amount;
  }
}

function getIndex (array, element) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id === element.id) {
      return i
    }
  }
}

const actions = {
  addToCart ({commit}, product) {
    commit('add', product)
  },
  checkOut ({commit}) {
    commit('checkOut')
    commit('clearCart')
  },
  clearCart ({commit}) {
    commit('clearCart')
  },
  deleteFromCart({commit}, item) {
  	commit('deleteFromCart', item)
  },
  updateEachTotalPrice ({commit}, e) {
  	var para = {
  		id: e.path[2].id,
  		amount: e.target.value
  	}
  	commit('updateEachTotalPrice', para)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
