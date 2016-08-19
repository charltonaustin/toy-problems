(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var sumOfPalindromicTwoBases = problem.sumOfPalindromicTwoBases;
  describe('sumOfPalindromicTwoBases',  () => {
    it('should return 1',  () => {
      expect(sumOfPalindromicTwoBases(1000000)).toBe(872187);
    });
  });
})();
