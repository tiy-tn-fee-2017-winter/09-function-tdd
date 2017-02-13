

import cardSum from '../../app/blackjack/card-sum';

test('A bot knows how to add two card values', (assert) => {
  const a = cardSum('1', '3');
  const b = cardSum('jack', '3');
  const c = cardSum('ace', '4');
  const d = cardSum('ace', 'queen');

  assert.strictEqual(a, 4, 'A bot can add two basic numbers (1 & 3)');
  assert.strictEqual(b, 13, 'A bot can add a basic card and a face card (jack & 3)');
  assert.strictEqual(c, 15, 'A bot can add a basic card and an ace (ace & 4)');
  assert.strictEqual(d, 21, 'A bot can add a face card and an ace (ace & queen)');
});
