(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findFibSeq = problem.findFibSeq;

  describe('findFibSeq',  () => {
    it('should return 12',  () => {
      expect(findFibSeq(3)).toBe(12);
    });
  });

  describe('findFibSeq',  () => {
    it('should return ',  () => {
      expect(findFibSeq(1000)).toBe(4782);
    });
  });

})();
