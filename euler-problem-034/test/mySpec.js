(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var sumOfFactorialOfDigits= problem.sumOfFactorialOfDigits;
  describe('sumOfFactorialOfDigits',  () => {
    it('should return 4',  () => {
      expect(sumOfFactorialOfDigits(120)).toBe(4);
      expect(sumOfFactorialOfDigits(1000)).toBe(4);
    });
  });

  var digitFactorials = problem.digitFactorials;
  describe('digitFactorials',  () => {
    it('should return 4',  () => {
      expect(digitFactorials(146)).toBe(145);
    });
    it('should return the sum of all digitFactorials',  () => {
      expect(digitFactorials(10000000)).toBe(40730);
    });
  });
})();
