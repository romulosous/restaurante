<template>
  <div class="item">
    <Quantity :item="item" class="item--quantity" />
    <div class="item--img-container">
      <img class="item--img" :src="imagePath" alt="" />
    </div>
    <div class="content">
      <h3 class="item--name">{{ item.name }}</h3>
      <a class="item--observation">Adicionar observação</a>
    </div>
    <p class="item--price">{{ item.price | currency }}</p>
  </div>
</template>

<script>
import Quantity from "./Quantity.vue";

export default {
  name: "CartItem",
  components: {
    Quantity,
  },
  props: {
    item: {},
  },
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
  computed: {
    imagePath() {
      /* eslint-disable */
      return require(`../assets/images/${this.item.id}.png`);
      /* eslint-enable */
    },
  },
  methods: {},
};
</script>

<style scoped>
.item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid var(--light-grey);
}

.item--quantity {
  display: flex;
  align-items: center;
  padding-right: 40px;
}

.item--quantity .number {
  font-weight: 500;
  font-size: 18px;
  color: var(--yellow);
  width: 28px;
  text-align: center;
}

.item--quantity .buttons {
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  background: none;
  border: 0;
}

.item--quantity .buttons:focus {
  outline: 0;
}

.item--img-container {
  border-radius: 8px;
  background: var(--light-yellow);
  width: 81px;
  height: 66px;
  display: flex;
  align-items: center;
}

.item--img {
  width: 65px;
  display: block;
  margin: auto;
}

.item--name {
  font-weight: 600;
  font-size: 18px;
  margin: 0;
}

.item--observation {
  font-weight: 500;
  font-size: 12px;
  color: var(--dark-grey);
  text-decoration: underline;
}

.content {
  flex-grow: 1;
  padding: 0 20px;
}

.item--price {
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: var(--yellow);
}

@media screen and (max-width: 767px) {
  .item {
    flex-wrap: wrap;
  }
  .item--img-container {
    order: 1;
  }

  .content {
    order: 2;
  }
  .item--quantity {
    order: 3;
    padding: 0;
    width: 81px;
    justify-content: center;
  }
  .item--price {
    order: 4;
    padding: 0 20px;
    margin: 5px 0;
  }
}
</style>
