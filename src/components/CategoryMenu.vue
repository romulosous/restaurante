<template>
  <div class="category-menu">
    <ul>
      <li
        v-for="category in categoriesList"
        :key="category.id"
        @click="onCategoryClick(category.id)"
        :class="{ active: isActive(category.id) }"
      >
        <component :is="category.icon" />

        <p>{{ category.label }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Pizza from "./icons/Pizza.vue";
import Combo from "./icons/Combo.vue";
import Deserts from "./icons/Deserts.vue";
import Drinks from "./icons/Drinks.vue";
import Burguer from "./icons/Burguer.vue";

export default {
  name: "CategoryMenu",
  components: {
    Pizza,
    Combo,
    Deserts,
    Drinks,
    Burguer,
  },
  data() {
    return {
      categoriesList: [
        { label: "Pizza", icon: "Pizza", id: "pizza" },
        { label: "Bebidas", icon: "Drinks", id: "drinks" },
        { label: "Doces", icon: "Deserts", id: "deserts" },
        { label: "Combos", icon: "Combo", id: "combo" },
        { label: "Burguers", icon: "Burguer", id: "burguer" },
      ],
      selectedCategory: "pizza",
    };
  },
  methods: {
    onCategoryClick(id) {
      this.selectedCategory = id;
    },
    isActive(id) {
      return this.selectedCategory === id;
    },
  },
};
</script>

<style scoped>
.category-menu {
  width: 130px;
  height: 100vh;
  background: white;

  display: flex;
  align-items: center;
}

.category-menu ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.category-menu ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.category-menu ul li p {
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 14px;
  color: var(--dark-grey);
}

.category-menu ul li svg path {
  fill: var(--dark-grey);
}

.category-menu ul li.active {
  background: var(--yellow);
  border-radius: 8px;
}

.category-menu ul li.active p {
  color: black;
}

/* Tablets */
@media screen and (max-width: 767px) {
  .category-menu {
    width: 100%;
    height: fit-content;
    background: white;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 20px;
    overflow: scroll;
  }

  ul li {
    min-width: 78px;
  }
}
</style>
