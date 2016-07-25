(() => {
  'use strict';
  var highlyDivisible = require('../src/problem.js').highlyDivisible;
  var findPrimeNumbersLessThan = require('../src/problem.js').findPrimeNumbersLessThan;
  var getDivisors = require('../src/problem.js').getDivisors;
  describe('highlyDivisible',  () => {
    it('should find lowest number with over five divisors',  () => {
      expect(highlyDivisible(5)).toBe(29);
    });
  });
 
  describe('findPrimeNumbersLessThan', () => {
    it('should find the prime numbers less than 10', () => {
      expect(findPrimeNumbersLessThan(10)).toEqual([2,3,5,7])
    });
  });

 describe('getDivisors', () => {
    it('should find divisors in array', () => {
      expect(getDivisors(10,[2,5,6,8])).toEqual([2,5])
    });
  });
})();
