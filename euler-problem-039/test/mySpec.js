(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findMostSolutions = problem.findMostSolutions;
  describe('someFunction',  () => {
    it('should return 1',  () => {
      expect(findMostSolutions()).toBe(840);
    });
  });
})();
