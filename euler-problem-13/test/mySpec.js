(function () {
  'use strict';
  var largeSum = require('../src/problem.js');
  describe('largeSum', function () {
    it('should return the right sum', function () {
      expect(largeSum()).toBe(1);
    });
  });
 
})();
