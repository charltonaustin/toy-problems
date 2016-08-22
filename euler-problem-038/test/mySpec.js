(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findNextPermutation = problem.findNextPermutation;
  describe('findNextPermutation',  () => {
    it('should return 1',  () => {
      expect(findNextPermutation([1, 2, 3, 4])).toEqual([4,3,2,1]);
      expect(findNextPermutation([4, 3, 2, 1])).toEqual([4,3,1,2]);
    });
  });
})();
