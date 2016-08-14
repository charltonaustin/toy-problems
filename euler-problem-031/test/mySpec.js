(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var differentWays = problem.differentWays;
  describe('differentWays',  () => {
    it('should return 1 for 1p',  () => {
      expect(differentWays(1)).toBe(1);
    });
    it('should return 2 for 2p',  () => {
      expect(differentWays(2)).toBe(2);
    });
    it('should return 3 for 4p',  () => {
      expect(differentWays(4)).toBe(3);
    });
    it('should return 3 for 200p',  () => {
      expect(differentWays(200)).toBe(73682);
    });
  });
})();
