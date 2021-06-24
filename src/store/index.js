import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        name: 'Rafael',
        cantidad: 0,
      },
      {
        name: 'Daniel',
        cantidad: 0,
      },
      {
        name: 'Moisés',
        cantidad: 0,
      },
    ],
  },
  mutations: {
    adding(state, index) {
      state.users[index].cantidad++
      this.ordering
    },
    restoring(state) {
      state.users.forEach((user) => {
        user.cantidad = 0
      })
    },
  },
  actions: {},
  modules: {},
})
