(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findLargestPandigitalNumber = problem.findLargestPandigitalNumber;
  describe('someFunction',  () => {
    it('should return 1',  () => {
      expect(findLargestPandigitalNumber()).toBe(7652413);
    });
  });
})();
