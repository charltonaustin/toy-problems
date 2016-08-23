(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findPandigitalMultiple = problem.findPandigitalMultiple;
  describe('findPandigitalMultiple',  () => {
    it('should return 1',  () => {
      expect(findPandigitalMultiple()).toEqual(9327);
    });
  });
})();
