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
      state.cartList.push(item);
    },
  },
  actions: {
    changeCategory(context, id) {
      context.commit("changeCategory", id);
    },
    addToCart(context, item) {
      context.commit("addToCart", item);
    },
  },
  modules: {
  },
});
