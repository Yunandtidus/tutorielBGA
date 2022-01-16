<template>
  SET game

  <svg
    class="shapes"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="22.273401mm"
    height="42.241646mm"
    viewBox="0 0 22.273401 42.241646"
  >
    <defs>
      <pattern
        id="red-outlined"
        width="2"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <line stroke="red" stroke-width="0.75px" y2="10" />
      </pattern>
      <pattern
        id="blue-outlined"
        width="2"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <line stroke="blue" stroke-width="0.75px" y2="10" />
      </pattern>
      <pattern
        id="green-outlined"
        width="2"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <line stroke="green" stroke-width="0.75px" y2="10" />
      </pattern>
    </defs>
    <path
      id="squiggle"
      style="fill: var(--fill)"
      transform="translate(-19.764914,-10.274631)"
      d="m 22.383079,37.64743 c 0.184214,-3.911953 2.139504,-7.435486 2.587411,-11.293161 0.261356,-1.785809 -0.21054,-3.548041 -1.112103,-5.065579 -0.932161,-1.878064 -2.001902,-3.680375 -2.937956,-5.551767 -0.8407,-1.689698 0.777362,-3.820965 2.61753,-4.093071 3.1182,-0.809405 5.784645,-0.535666 8.922935,0.01228 1.961646,0.511576 3.515677,2.014279 4.900676,3.466085 2.644418,3.114292 2.87216,7.720804 1.609217,11.506455 -0.640206,3.311665 -2.644251,6.302901 -2.619092,9.747429 0.180948,3.279051 1.252011,6.545296 3.282105,9.096342 0.906978,1.372667 2.418682,2.837237 1.264319,4.419238 -1.536856,1.0535 -3.85358,1.866215 -5.683584,1.960137 C 29.106323,52.015089 23.589224,46.858092 22.627975,40.701975 22.44538,39.696309 22.353996,38.670929 22.383079,37.647426 Z"
    />

    <path
      id="diamond"
      style="fill: var(--fill)"
      d="M 32.059311,33.527079 20.767174,22.50221 31.792042,11.210074 43.084179,22.234942 Z"
      transform="translate(-19.764914,-10.274631), matrix(0.91268631,0,0,1.8019079,1.9189227,-8.8837822)"
    />

    <rect
      id="oval"
      style="fill: var(--fill)"
      width="20"
      height="40"
      x="2.5"
      y="2.5"
      ry="10"
    />
  </svg>

  <div id="cards">
    <Card
      v-for="card in gamedatas.cards"
      :key="card"
      :cardId="card"
      :selected="selectedCards.indexOf(card) >= 0"
      @click="toggleSelection(card)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";
export default defineComponent({
  name: "App",
  inject: ["game"],
  components: {
    Card,
  },
  data() {
    return {
      gamedatas: {
        cards: [],
      },
      selectedCards: [] as number[],
    };
  },
  methods: {
    toggleSelection(card: number) {
      const index = this.selectedCards.indexOf(card);
      if (index >= 0) {
        this.selectedCards.splice(index, 1);
      } else {
        this.selectedCards.push(card);
      }
      if (this.selectedCards.length == 3) {
        this.$game.ajaxcall("/tutoyunan/tutoyunan/submitSet.html", { card });
      }
    },
  },
});
</script>

<style lang="scss">
#cards {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
}
</style>
