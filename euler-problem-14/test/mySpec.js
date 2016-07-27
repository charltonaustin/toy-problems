(function () {
  'use strict';
  var longestCollatzSeq = require('../src/problem.js');
  describe('longestCollatzSeq', function () {
    it('should return 1', function () {
      expect(longestCollatzSeq()).toBe(837799);
    });
  });
 
})();
