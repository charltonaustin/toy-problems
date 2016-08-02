(function () {
  'use strict';
  var someFunction = require('../src/problem.js');
  describe('someFunction',  () => {
    it('should return 1',  () => {
      expect(someFunction()).toBe(1);
    });
  });
})();
