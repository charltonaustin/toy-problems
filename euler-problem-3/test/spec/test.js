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
    it('should find largest for 61', function(){
      expect(findPrimeNumber(61)).toBe(61);
    });
    it('should find largest for 5001', function(){
      expect(findPrimeNumber(5001)).toBe(1667);
    });

    it('should find largest for 600851475143', function(){
     expect(findPrimeNumber(600851475143)).toBe(6857);
      /* 
         The expectation below runs out of memory. 
         So I used fermant's factorization to find 
         the largest prime number.
       */

      // expect(findPrimeFactors(600851475143)).toBe(6857);
    });

  });

  describe('findFermantFactorization', function(){
    it('should find fermant factorizatio for 13195', function(){
      expect(findFermantFactorization(Math.ceil(Math.sqrt(13195)), 13195)).toEqual([118, 27]);
    });
    it('should return false if a is too large', function(){
      expect(findFermantFactorization(13195, 13195)).toEqual(false);
    });
  });

  describe('isPrimeNumber', function(){
    it('should return false', function(){
      expect(isPrimeNumber(4)).toBe(false);
    });
    it('should return true', function(){
      expect(isPrimeNumber(5)).toBe(true);
    });
  });

  describe('findPrimeNumber',function(){
    it('should return a prime number', function(){
      expect(findPrimeNumber(13195)).toBe(29);
    })
  });
})();
