

import selectAction from '../../app/blackjack/select-action';

test('A bot knows what action it should take', (assert) => {
  const aceFive = selectAction('ace', '5');
  const aceAce = selectAction('ace', 'ace');
  const aceSeven = selectAction('ace', '7');
  const aceJack = selectAction('ace', 'jack');
  const dubSevens = selectAction('7', '7');

  assert.equal(aceFive, 'hit', 'Cards Ace & 5 should hit');
  assert.equal(aceAce, 'split', 'Cards Ace & Ace should split');
  assert.equal(aceSeven, 'stay', 'Cards Ace & Seven should stay');
  assert.equal(aceJack, 'stay', 'Cards Ace & Jack should stay');
  assert.equal(dubSevens, 'split', 'Cards Seven & Seven should split');
});
