(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var maxNumberOfPrimes = problem.maxNumberOfPrimes;
  describe('maxNumberOfPrimes',  () => {
    it('should return -59231',  () => {
      expect(maxNumberOfPrimes(1250)).toBe(-59231);
    });
  });
})();
