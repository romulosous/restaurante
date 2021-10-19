<template>
  <div class="home">
    <router-link to="/cart" class="cart-icon" v-if="isSmallScreens()">
      <CartIcon />
    </router-link>
    <CategoryMenu />
    <ItemsList />
    <Cart v-if="isDesktop()" />
  </div>
</template>

<script>
import CategoryMenu from "../components/CategoryMenu.vue";
import ItemsList from "../components/ItemsList.vue";
import Cart from "../components/Cart.vue";
import Mixin from "../mixins/mixins";

import CartIcon from "../assets/icons/cart.svg";

export default {
  name: "Home",
  components: {
    CategoryMenu,
    ItemsList,
    Cart,
    CartIcon,
  },
  mixins: [Mixin],
};
</script>

<style scoped>
.home {
  display: flex;
}

.cart-icon {
  width: 42px;
  height: 42px;
  background: var(--pink);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 20px auto;
}

@media screen and (max-width: 767px) {
  .home {
    flex-direction: column;
  }
}
</style>
