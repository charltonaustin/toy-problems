(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var rotateNumber = problem.rotateNumber;
  describe('rotateNumber',  () => {
    it('should return same number for single digits',  () => {
      expect(rotateNumber(3)).toBe(3);
    });
    it('should return same number if digit is zero',  () => {
      expect(rotateNumber(170)).toBe(170);
    });
    it('should return same number after multiple calls',  () => {
      expect(rotateNumber(171)).toBe(117);
      expect(rotateNumber(117)).toBe(711);
      expect(rotateNumber(711)).toBe(171);
    });
  });

  var findNumberOfCircularPrimes = problem.findNumberOfCircularPrimes;
  describe('findNumberOfCircularPrimes',  () => {
    it('should return 13 for less than 100',  () => {
      expect(findNumberOfCircularPrimes(100)).toBe(13);
    });
    it('should return 13 for less than 1 million',  () => {
      expect(findNumberOfCircularPrimes(1000000)).toBe(55);
    });
  });
})();
