

import sameFirst from '../../app/arrays/same-first';

test('It can check first values', (assert) => {
  const a = sameFirst(['b', true], ['b', true]);
  const b = sameFirst(['b', true], ['b', false]);
  const c = sameFirst(['d', true], ['b', true]);
  const d = sameFirst(['d', true], ['b', false]);
  const e = sameFirst(['d', true], ['c', false, 'x']);

  assert.strictEqual(a, true, 'It returns true when the first values are the same');
  assert.strictEqual(b, true, 'It returns true when the first values are the same');
  assert.strictEqual(c, false, 'It returns false when the first values are different');
  assert.strictEqual(d, false, 'It returns false when the first values are different');
  assert.strictEqual(e, false, 'It returns false when the first values are different');
});
