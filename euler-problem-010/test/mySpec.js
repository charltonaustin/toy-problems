(function () {
  'use strict';
  var sumOfPrimesLessThan = require('../src/problem.js').sumOfPrimesLessThan;
  describe('sumOfPrimesLessThan', function () {
    it('should return 1', function () {
      expect(sumOfPrimesLessThan(10)).toBe(17);
      expect(sumOfPrimesLessThan(2000000)).toBe(142913828922);
    });
  });
 
})();
