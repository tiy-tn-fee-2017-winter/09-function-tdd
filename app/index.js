import 'whatwg-fetch';
import Vue from 'vue';
import BlackjackBot from './blackjack/blackjack-bot.vue';
import ConwayBot from './conway/conway-bot.vue';

new Vue({
  ...BlackjackBot,
  el: '.blackjack',
});

new Vue({
  ...ConwayBot,
  el: '.conway',
});
