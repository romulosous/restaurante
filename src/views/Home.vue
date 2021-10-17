<template>
  <div class="home">
    <CategoryMenu />
    <ItemsList />
  </div>
</template>

<script>
import CategoryMenu from "../components/CategoryMenu.vue";
import ItemsList from "../components/ItemsList.vue";

export default {
  name: "Home",
  components: {
    CategoryMenu,
    ItemsList,
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
