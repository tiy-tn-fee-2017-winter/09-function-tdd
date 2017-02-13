

import reviveEh from '../../app/conway/should-revive';

test('A cell knows the rules if it\'s dead', (assert) => {
  const a = reviveEh([false, false, false, false, false, false, false, false]);
  const b = reviveEh([false, true, false, false, true, false, false, false]);
  const c = reviveEh([false, true, false, true, true, false, false, false]);
  const d = reviveEh([true, true, true, false, true, false, false, false]);

  assert.equal(a, false, 'A cell does not revive if it has no living neighbors');
  assert.equal(b, false, 'A cell does not revive with one living neighbor');
  assert.equal(c, true, 'A cell revives with a little help from 3 of its friends');
  assert.equal(d, false, 'A cell does not revive with 4 living neighbors');
});
