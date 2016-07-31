(function () {
  'use strict';
  var someFunction = require('../src/problem.js');
  describe('someFunction', function () {
    it('should return 1', function () {
      expect(someFunction()).toBe(1);
    });
  });
 
})();
