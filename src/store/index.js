import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCategory: "",
    cartList: [],
  },
  mutations: {
    changeCategory(state, id) {
      state.selectedCategory = id;
    },
    addToCart(state, item) {
      state.cartList.push({ ...item, quantity: 1 });
    },
    increaseQuantity(state, index) {
      // eslint-disable-next-line no-plusplus
      ++state.cartList[index].quantity;
    },
    decreaseQuantity(state, index) {
      // eslint-disable-next-line no-plusplus
      --state.cartList[index].quantity;
    },
  },
  actions: {
    changeCategory(context, id) {
      context.commit("changeCategory", id);
    },
    addToCart({ state, commit }, item) {
      /* eslint-disable no-shadow */
      const cartItem = state.cartList.find((cartItem) => cartItem.id === item.id);
      const index = state.cartList.findIndex((cartItem) => cartItem.id === item.id);

      // eslint-disable-next-line no-unused-expressions
      cartItem ? commit("increaseQuantity", index) : commit("addToCart", item);
    },
    increaseQuantity({ state, commit }, id) {
      const index = state.cartList.findIndex((cartItem) => cartItem.id === id);
      commit("increaseQuantity", index);
    },
    decreaseQuantity({ state, commit }, id) {
      const index = state.cartList.findIndex((cartItem) => cartItem.id === id);

      commit("decreaseQuantity", index);
    },
  },
  modules: {
  },
});
