<template>
  <div class="items-list">
    <Item v-for="item in itemsList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import Item from "./Item.vue";

export default {
  name: "ItemsList",
  components: {
    Item,
  },
  data() {
    return {
      itemsList: [],
    };
  },
  created() {},
  computed: {
    selectedCategory: {
      get() {
        return this.$store.state.selectedCategory;
      },
    },
  },
  methods: {
    getItemList() {
      axios
        .get(`http://localhost:3000/${this.selectedCategory}`)
        .then((response) => {
          this.itemsList = response.data;
        });
    },
  },
  watch: {
    selectedCategory() {
      this.getItemList();
    },
  },
};
</script>

<style scoped>
.items-list {
  margin: 50px;
  display: flex;
}
@media screen and (max-width: 767px) {
  .items-list {
    flex-wrap: wrap;
    margin: 20px;
  }
}
</style>
