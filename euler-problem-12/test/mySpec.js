(() => {
  'use strict';
  var highlyDivisible = require('../src/problem.js').highlyDivisible;
  var getDivisors = require('../src/problem.js').getDivisors;
  var findPowersOfDivisors = require('../src/problem.js').findPowersOfDivisors;
  var totalNumberOfDivisors = require('../src/problem.js').totalNumberOfDivisors;

  describe('highlyDivisible',  () => {
    it('should find lowest number with over five divisors',  () => {
      expect(highlyDivisible(5)).toBe(28);
    });
  });

  describe('getDivisors', () => {
    it('should find divisors in array', () => {
      expect(getDivisors(10,[2,5,6,8])).toEqual([2,5])
      expect(getDivisors(6,[2,3,5,7,11])).toEqual([2,3])
    });
  });

  describe('findPowersOfDivisors', () => {
    it('should find powers for', () => {
      expect(findPowersOfDivisors(10,[2,5])).toEqual([2,2])
      expect(findPowersOfDivisors(12,[2,3])).toEqual([3,2])
    });
  });
  
  describe('totalNumberOfDivisors', () => {
    it('should number of divisors for [2,2]', () => {
      expect(totalNumberOfDivisors([2,2])).toEqual(4)
    });
  });

  describe('highlyDivisible',  () => {
    it('should find lowest number with over five hundred divisors',  () => {
      expect(highlyDivisible(500)).toBe(76576500);
    });
  });
})();
