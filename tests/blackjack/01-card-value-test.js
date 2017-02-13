import cardValue from '../../app/blackjack/card-value';

test('A bot knows a numeric values', (assert) => {
  const five = cardValue('5');
  const nine = cardValue('9');
  const ten = cardValue('10');

  assert.strictEqual(five, 5, 'A bot should know "5" is equal to number 5');
  assert.strictEqual(nine, 9, 'A bot should know "9" is equal to number 9');
  assert.strictEqual(ten, 10, 'A bot should know "10" is equal to number 10');
});

test('A bot knows a face card values', (assert) => {
  const jack = cardValue('jack');
  const queen = cardValue('queen');
  const king = cardValue('king');


  assert.strictEqual(jack, 10, 'A bot should know "jack" is equal to number 10');
  assert.strictEqual(queen, 10, 'A bot should know "queen" is equal to number 10');
  assert.strictEqual(king, 10, 'A bot should know "king" is equal to number 10');
});

test('A bot always thinks aces are 11', (assert) => {
  const ace = cardValue('ace');

  assert.strictEqual(ace, 11, 'A bot should know "ace" is equal to number 11');
});
