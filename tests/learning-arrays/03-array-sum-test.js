

import arraySum from '../../app/arrays/array-sum';

test('It can sum up an array', (assert) => {
  const a = arraySum([1, 5, 10]);
  const b = arraySum([1, 50, 1000, 10]);

  assert.equal(a, 16);
  assert.equal(b, 1061);
});
