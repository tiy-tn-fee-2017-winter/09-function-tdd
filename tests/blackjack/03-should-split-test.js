

import shouldSplit from '../../app/blackjack/should-split';

test('A bot knows when to split', (assert) => {
  const aceFive = shouldSplit('ace', '5');
  const aceAce = shouldSplit('ace', 'ace');
  const aceSeven = shouldSplit('ace', '7');
  const aceJack = shouldSplit('ace', 'jack');
  const dubSevens = shouldSplit('7', '7');

  assert.equal(aceFive, false, 'A bot cannot split different cards. Cards Ace & 5');
  assert.equal(aceAce, true, 'A bot splits on doubles. Cards Ace & Ace');
  assert.equal(aceSeven, false, 'A bot cannot split  different cards. Cards Ace & Seven');
  assert.equal(aceJack, false, 'A bot cannot split  different cards. Cards Ace & Jack');
  assert.equal(dubSevens, true, 'A bot splits on doubles. Cards Seven & Seven');
});
