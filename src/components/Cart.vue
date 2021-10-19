<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back"> ←️ Voltar </router-link>
    <h2 class="cart-title">Seu Pedido</h2>
    <CartItem v-for="item in cartList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
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

@media screen and (max-width: 767px) {
  .cart {
    width: 100%;
    min-width: unset;
    padding: 50px 20px 20px;
  }
}
</style>
