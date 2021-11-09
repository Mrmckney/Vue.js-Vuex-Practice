import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'red'
  },
  mutations: {
    addCount(state, randomNumber) {
      state.counter = randomNumber
    },
    subCount(state, randomNumber) {
      if(state.counter > 0){
        this.result = randomNumber
      }
      if(randomNumber < 0){
        this.result = 0
      }
      if(this.result >= 0){
        state.counter = this.result
      }
    },
    setColorCode(state, newColor) {
      state.colorCode = newColor
    }
  },
  actions: {
    addCount({ commit }) {
      commit('addCount', Math.floor(Math.random() * 10 + this.state.counter))
    },
    subCount({ commit }) {
      commit('subCount', this.state.counter - Math.floor(Math.random() * 10))
    },
    setColorCode({ commit }, newColor) {
      commit('setColorCode', newColor)
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
