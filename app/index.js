import 'whatwg-fetch';
import Vue from 'vue';
import BlackjackBot from './blackjack/blackjack-bot.vue';

new Vue({
  ...BlackjackBot,
  el: '.blackjack',
});
