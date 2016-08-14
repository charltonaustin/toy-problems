(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findSumPowers = problem.findSumPowers;
  describe('findSumPowers',  () => {
    it('should return 19316 for 4',  () => {
      expect(findSumPowers(9999, 4)).toBe(19316);
    });
    it('should return 19316 for 5',  () => {
      expect(findSumPowers(1000000, 5)).toBe(443839);
    });
  });
})();
