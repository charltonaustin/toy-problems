(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findTruncatablePrimes = problem.findTruncatablePrimes;
  describe('findTruncatablePrimes',  () => {
    it('should return 1',  () => {
      expect(findTruncatablePrimes()).toBe(748317);
    });
  });
})();
