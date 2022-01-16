<template>
  <div class="card" :id="'card_' + cardId" :class="{ selected: selected }">
    <svg
      v-for="index in nbShapes"
      :key="index"
      class="shape"
      :class="[color, shading]"
    >
      <use :href="'#' + shape" />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NB_SHAPES, SHADINGS, SHAPES, COLORS } from "@/model/card";

export default defineComponent({
  name: "Card",
  props: {
    cardId: { type: Number, required: true },
    selected: { type: Boolean, required: true },
  },
  data() {
    return {};
  },
  computed: {
    nbShapes() {
      return NB_SHAPES[this.cardId % 8];
    },
    shape() {
      return SHAPES[(this.cardId >> (3 * 1)) % 8];
    },
    color() {
      return COLORS[(this.cardId >> (3 * 2)) % 8];
    },
    shading() {
      return SHADINGS[(this.cardId >> (3 * 3)) % 8];
    },
  },
});
</script>

<style lang="scss">
.card {
  box-sizing: border-box;
  flex: 0 0 auto;
  width: 180px;
  height: 120px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 15px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
}

.card.selected {
  box-shadow: 0 0 0 10px red;
}

.shapes {
  position: fixed;
  left: -9999px;
}

.shape {
  zoom: 2;
  stroke-width: 1.5px;
  width: 25px;
  height: 45px;
}

.red {
  stroke: red;
  fill: red;
  --color: red;

  &.outlined {
    --fill: url(#red-outlined);
  }
}

.blue {
  stroke: blue;
  fill: blue;
  &.outlined {
    --fill: url(#blue-outlined);
  }
}

.green {
  stroke: green;
  fill: green;
  &.outlined {
    --fill: url(#green-outlined);
  }
}

svg.empty {
  fill: none;
}
</style>
