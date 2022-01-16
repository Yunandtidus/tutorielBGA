/**
 *------
 * BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
 * tutoyunan implementation : © <Your name here> <Your email address here>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * tutoyunan.js
 *
 * tutoyunan user interface script
 *
 * In this file, you are describing the logic of your user interface, in Javascript language.
 *
 */

define([
  "dojo",
  "dojo/_base/declare",
  "ebg/core/gamegui",
  "ebg/counter",
], function (dojo, declare) {
  return declare("bgagame.tutoyunan", ebg.core.gamegui, {
    constructor: function () {},

    setup: function (gamedatas) {
      console.log("Starting game setup", gamedatas, this);

      var app = Vue.createApp(Game);

      app.config.globalProperties.$game = this;
      this.vue = app.mount("#app");
      this.vue.gamedatas = gamedatas;

      this.setupNotifications();

      console.log("Ending game setup");
    },
    onEnteringState: function (stateName, args) {
      console.log("Entering state: " + stateName);
    },
    onLeavingState: function (stateName) {
      console.log("Leaving state: " + stateName);
    },
    onUpdateActionButtons: function (stateName, args) {
      console.log("onUpdateActionButtons: " + stateName);
    },
    setupNotifications: function () {
      console.log("notifications subscriptions setup");
    },
  });
});
