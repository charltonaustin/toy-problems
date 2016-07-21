(function () {
  'use strict';
  var findPrimeN = require('../src/problem.js');
  describe('findPrimeN', function () {
    it('should return 2 for first prime', function () {
      expect(findPrimeN(1)).toBe(2);
    });

    it('should return 3 for the second prime', function () {
      expect(findPrimeN(2)).toBe(3);
    });

    it('should return 5 for the third prime', function () {
      expect(findPrimeN(3)).toBe(5);
    });

    it('should return 7 for the fourth prime', function () {
      expect(findPrimeN(4)).toBe(7);
    });

    it('should return 11 for the fifth prime', function () {
      expect(findPrimeN(5)).toBe(11);
    });

    it('should return 13 for the sixth prime', function () {
      expect(findPrimeN(6)).toBe(13);
    });

    it('should return 73 for the 21st prime', function () {
      expect(findPrimeN(21)).toBe(73);
    });

    it('should return 79 for the 22nd prime', function () {
      expect(findPrimeN(22)).toBe(79);
    });

    it('should return 541 for the 100th prime', function () {
      expect(findPrimeN(100)).toBe(541);
    });

    it('should return ??? for the 1001th prime', function () {
      expect(findPrimeN(1001)).toBe(7927);
    });

  });
 
})();
