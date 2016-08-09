(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findLargest = problem.findLargest;
  describe('findLargest',  () => {
    it('should return 983',  () => {
      expect(findLargest()).toBe(983);
    });
  });
})();
