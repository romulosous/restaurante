<template>
  <div class="items-list">
    <Loading v-if="isLoading" />
    <Item v-for="item in itemsList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import Item from "./Item.vue";
import Loading from "./Loading.vue";

export default {
  name: "ItemsList",
  components: {
    Item,
    Loading,
  },
  data() {
    return {
      itemsList: [],
      isLoading: false,
    };
  },
  created() {
    this.getItemList();
  },
  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategory;
    },
  },
  methods: {
    getItemList() {
      this.itemsList = [];
      this.isLoading = true;

      setTimeout(() => {
        axios
          .get(`http://localhost:3000/${this.selectedCategory}`)
          .then((response) => {
            this.itemsList = response.data;
            this.isLoading = false;
          });
      }, 500);
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
  flex-wrap: wrap;
  width: 100%;
  align-content: flex-start;
}
@media screen and (max-width: 767px) {
  .items-list {
    flex-wrap: wrap;
    margin: 0px;
    padding: 20px;
  }
}
</style>
