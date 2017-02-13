

import aliveEh from '../../app/conway/should-stay-alive';

test('A cell knows the rules if it\'s alive', (assert) => {
  const a = aliveEh([false, false, false, false, false, false, false, false]);
  const b = aliveEh([false, true, false, false, true, false, false, false]);
  const c = aliveEh([false, true, false, true, true, false, false, false]);
  const d = aliveEh([true, true, true, true, true, true, true, true]);
  const e = aliveEh([false, true, false, true, false, true, false, true]);

  assert.equal(a, false, 'A cell dies of underpopulation with no living neighbors');
  assert.equal(b, true, 'A stays alive in harmony when there are 2 living neighbors');
  assert.equal(c, true, 'A stays alive in harmony when there are 3 living neighbors');
  assert.equal(d, false, 'A cell dies of overpopulation with 8 living neighbors');
  assert.equal(e, false, 'A cell dies of overpopulation with 4 living neighbors');
});
