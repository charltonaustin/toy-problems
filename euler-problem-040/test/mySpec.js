(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findExpression = problem.findExpression;
  describe('findExpression',  () => {
    it('should return 1',  () => {
      //expect(findExpression(1)).toBe(1);
    });
    it('should return 2',  () => {
      //expect(findExpression(2)).toBe(1);
    });
    it('should return 6',  () => {
      expect(findExpression(3)).toBe(5);
    });
    it('should return ??? for 6',  () => {
      expect(findExpression(7)).toBe(210);
    });
  });
})();
