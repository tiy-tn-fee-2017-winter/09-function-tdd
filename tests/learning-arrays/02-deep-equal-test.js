

import deepEquals from '../../app/arrays/deep-equal';

test('It can check deep equal',  (assert) => {
  const a = deepEquals(['b', true], ['b', true]);
  const b = deepEquals(['b', true], ['b', false]);
  const c = deepEquals([2, 7], [2, 7]);
  const d = deepEquals(['d', true], ['z', true]);
  const e = deepEquals(['d', true], ['d', true, 'x']);

  assert.strictEqual(a, true, 'It returns true when all the values are the same in both arrays');
  assert.strictEqual(b, false, 'It returns false when the second item is differet');
  assert.strictEqual(c, true, 'It returns true when all the values are the same in both arrays');
  assert.strictEqual(d, false, 'It returns false when ANY item is different');
  assert.strictEqual(e, false, 'It returns false if the lengths are different');
});
