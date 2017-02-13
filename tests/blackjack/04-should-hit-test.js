

import shouldHit from '../../app/blackjack/should-hit';

test('it knows not to hit when it should split', (assert) => {
  const aceAce = shouldHit('ace', 'ace');
  const queenQueen = shouldHit('queen', 'queen');
  const sevenSeven = shouldHit('seven', 'seven');

  assert.equal(aceAce, false, 'A bot should not hit when it should split. Cards Ace & Ace');
  assert.equal(queenQueen, false, 'A bot should not hit when it should split. Cards Queen & Queen');
  assert.equal(sevenSeven, false, 'A bot should not hit when it should split. Cards Seven & Seven');
});

test('it knows to hit when less than 17', (assert) => {
  assert.strictEqual(shouldHit('2', '9'), true, 'The bot hits when cards are 2 & 9');
  assert.strictEqual(shouldHit('10', '6'), true, 'The bot hits when cards are 10 & 6');
  assert.strictEqual(shouldHit('ace', '4'), true, 'The bot hits when cards are Ace & 4');
});

test('it knows to hit when at 17', (assert) => {
  assert.strictEqual(shouldHit('8', '9'), true, 'The bot hits when cards are 8 & 9');
  assert.strictEqual(shouldHit('queen', '7'), true, 'The bot hits when cards are Queen & 7');
  assert.strictEqual(shouldHit('ace', '6'), true, 'The bot hits when cards are Ace & 6');
});

test('it knows not to hit when greater than 17', (assert) => {
  const aceSeven = shouldHit('ace', '7');
  const queenKing = shouldHit('queen', 'king');
  const nineTen = shouldHit('9', '10');

  assert.equal(aceSeven, false, 'A bot should not hit when greater than 17. Cards Ace & Seven');
  assert.equal(queenKing, false, 'A bot should not hit when greater than 17. Cards Queen & King');
  assert.equal(nineTen, false, 'A bot should not hit when greater than 17. Cards 9 & 19');
});
