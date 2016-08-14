(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var distinctNumbers = problem.distinctNumbers;
  describe('distinctNumbers',  () => {
    it('should return 15 for 5',  () => {
      expect(distinctNumbers(5)).toBe(15);
    });
    it('should return 15 for 100',  () => {
      expect(distinctNumbers(100)).toBe(9183);
    });
  });
})();
