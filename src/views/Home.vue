<template>
  <div class="home">
    <CategoryMenu />
    <ItemsList />
    <Cart />
  </div>
</template>

<script>
import CategoryMenu from "../components/CategoryMenu.vue";
import ItemsList from "../components/ItemsList.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "Home",
  components: {
    CategoryMenu,
    ItemsList,
    Cart,
  },
};
</script>

<style scoped>
.home {
  display: flex;
}

@media screen and (max-width: 767px) {
  .home {
    flex-direction: column;
  }
}
</style>
