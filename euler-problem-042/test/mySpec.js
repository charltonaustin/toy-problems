(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var someFunction = problem.someFunction;
  describe('someFunction',  () => {
    it('should return 1',  () => {
      expect(someFunction()).toBe(1);
    });
  });
})();
