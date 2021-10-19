<template>
  <div class="item">
    <div class="item--quantity">
      <span class="buttons" @click="decreaseQuantity(item.id)">-</span>
      <span class="number">{{ item.quantity }}</span>
      <span class="buttons" @click="increaseQuantity(item.id)">+</span>
    </div>
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
import { mapActions } from "vuex";

export default {
  name: "CartItem",
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
  methods: {
    ...mapActions(["increaseQuantity", "decreaseQuantity"]),
  },
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
  padding: 40px;
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
</style>
