(function () {
  'use strict';

  describe('findPrimesLessThan', function () {
    it('should find primes less than 3', function () {
      expect(findPrimesLessThan(3)).toEqual([2]);
    });
    it('should find primes less than 10', function(){
      expect(findPrimesLessThan(10)).toEqual([2,3,5,7])
    });
  });
  describe('isPrimeFactor', function(){
    it('should see if is prime factor', function(){
      expect(isPrimeFactor(13195, 5)).toBe(true);
    });
  });

  describe('largestPrimeFactor', function(){
    it('should find largest for 13195', function(){
      expect(findPrimeFactors(13195)).toBe(29);
    });

    it('should find largest for 600851475143', function(){
//      expect(findPrimeFactors(600851475143)).toBe(29);
    });

  });
})();
