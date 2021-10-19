<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back" v-if="isSmallScreens()">
      ←️ Voltar
    </router-link>
    <h2 class="cart-title">Seu Pedido</h2>
    <CartItem v-for="item in cartList" :key="item.id" :item="item" />
    <div class="cart--total" v-if="!hasNoItem">
      <span>Total: </span>
      <span class="price">{{ getCartTotal | currency }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";
import Mixin from "../mixins/mixins";

export default {
  name: "Cart",
  mixins: [Mixin],
  components: {
    CartItem,
  },
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString("pt-br", {
        mininumFractionDigits: 2,
      })}`;
    },
  },
  computed: {
    ...mapGetters(["getCartTotal"]),
    cartList() {
      return this.$store.state.cartList;
    },
    hasNoItem() {
      return !this.cartList.length;
    },
  },
};
</script>

<style scoped>
.cart {
  background: white;
  width: 643px;
  min-width: 643px;
  padding: 50px;
}

.card--go-back {
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: black;
}

.cart-title {
  margin-top: 50px;
  font-weight: 600;
  font-size: 24px;
}

.cart--total {
  font-weight: 600;
  font-size: 18px;
  text-align: right;
  margin-top: 30px;
}

.cart--total .price {
  color: var(--yellow);
  padding-left: 10px;
}

@media screen and (max-width: 767px) {
  .cart {
    width: 100%;
    min-width: unset;
    padding: 50px 20px 20px;
  }
}
</style>
