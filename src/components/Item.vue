<template>
  <div class="item">
    <div class="container">
      <div class="item--tag" v-if="item.offer">Oferta</div>
      <!-- <img class="item--img" :src="imagePath" alt="" /> -->
      <img class="item--img" src="../assets/images/0001.png" alt="" />
    </div>
    <div class="content">
      <h2 class="item--name">{{ item.name }}</h2>
      <p class="item--description">{{ item.description }}</p>
      <p class="item--price">{{ item.price | currency }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
  props: ["item"],
  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategory;
    },
    // imagePath() {
    //   return require(`../assets/images/${this.selectedCategory}/${this.item.id}.png`);
    // },
  },
};
</script>

<style scoped>
.item {
  width: 215.95px;
  height: 290px;
  border-radius: 8px;
  background: white;
  position: relative;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.item--tag {
  position: absolute;
  background: var(--pink);
  border-radius: 8px;
  color: white;
  top: 15px;
  right: 15px;
  font-weight: 500;
  font-size: 12px;
  padding: 3px 8px;
}

.item--img {
  display: block;
  margin: auto;
  width: 100%;
}

.item--name {
  font-weight: 600;
  font-size: 18px;
  margin: 0;
}

.item--description {
  color: var(--dark-grey);
  font-weight: 300;
  font-size: 12px;
  margin: 0;
}

.item .content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
}

.item--price {
  font-weight: 600;
  font-size: 18px;
  color: var(--yellow);
  margin: 8px auto;
}

/* Tablets */
@media screen and (max-width: 767px) {
  .item {
    width: 100%;
    height: fit-content;
    border: 1px solid var(--light-grey);
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    padding: 10px 20px;
  }

  .item--img {
    height: 86px;
    order: 0;
    margin: 0 0 10px 0;
  }

  .item--price {
    text-align: right;
    margin: 5px 0 0 auto;
  }

  .item--tag {
    position: static;
    order: 1;
    width: fit-content;
  }

  .content {
    flex-grow: 1;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
}
</style>
