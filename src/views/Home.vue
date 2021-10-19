<template>
  <div class="home">
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

export default {
  name: "Home",
  components: {
    CategoryMenu,
    ItemsList,
    Cart,
  },
  mixins: [Mixin],
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
