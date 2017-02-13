

import aliveNeighbors from '../../app/conway/alive-neighbors';

test('A cell knows how many neighbors are alive', function (assert) {
  const a = aliveNeighbors([false, false, false, false, false, false, false, false]);
  const b = aliveNeighbors([false, true, false, false, true, false, false, false]);
  const c = aliveNeighbors([false, true, false, true, true, false, false, false]);
  const d = aliveNeighbors([true, true, true, false, true, false, false, false]);

  assert.equal(a, 0, 'All dead neighbors');
  assert.equal(b, 2, 'Two alive neighbors');
  assert.equal(c, 3, 'Three alive neighbors');
  assert.equal(d, 4, 'Four alive neighbors');
});
