<template>
  <div class="item--quantity">
    <button
      class="buttons"
      @click="decreaseQuantity(item.id)"
      :disabled="item.quantity === 0"
    >
      -
    </button>
    <span class="number">{{ item.quantity }}</span>
    <button class="buttons" @click="increaseQuantity(item.id)">+</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: {},
  },
  methods: {
    ...mapActions(["increaseQuantity", "decreaseQuantity"]),
  },
};
</script>

<style scoped>
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
</style>
