<template lang="html">
<form class="blackjack-bot" @submit.prevent="checkAction">
  <h2 class="blackjack-bot__result">Card Bot 3000</h2>

  <div class="blackjack-bot__cards">
    <div class="blackjack-card">
      <label class="blackjack-card__label">Card 1</label>
      <input class="blackjack-card__input" size="6" v-model="card1">
    </div>

    <div class="blackjack-card">
      <label class="blackjack-card__label">Card 2</label>
      <input class="blackjack-card__input" size="6" v-model="card2">
    </div>
  </div>

  <div class="blackjack-bot__actions">
    <button class="btn">What Should I Do?</button>
  </div>

  <h2 class="blackjack-bot__result">{{ action }}</h2>
</form>
</template>

<script>
import selectAction from './select-action';

export default {
  data() {
    return {
      card1: '',
      card2: '',
      action: 'Awaiting Card Values...',
    };
  },

  methods: {
    checkAction() {
      this.action = selectAction(this.card1, this.card2);
    }
  },
};
</script>
