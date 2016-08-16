(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findDen = problem.findDen;
  describe('findDen',  () => {
    it('should return 1',  () => {
      expect(findDen()).toBe(100);
    });
  });
})();
