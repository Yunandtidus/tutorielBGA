import { createApp } from "vue";
import Game from "./Game.vue";

declare global {
  interface Window {
    Vue: any;
    Game: typeof Game;
  }
}

window.Vue = { createApp };
window.Game = Game;

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $game: any;
  }
}
