(function () {
  'use strict';
  var sumPowerOfTwo = require('../src/problem.js').sumPowerOfTwo;
  var findPowerOfTwo = require('../src/problem.js').findPowerOfTwo;
  describe('sumPowerOfTwo', function () {
    it('should return 26', function () {
      expect(sumPowerOfTwo(15)).toBe("26");
    });

    it('should return 5', function () {
      expect(sumPowerOfTwo(5)).toBe("5");
    });
    
    it('should return 1366', function () {
      expect(sumPowerOfTwo(1000)).toBe("1366");
    });
  });

  describe('findPowerOfTwo', function () {
    it('should return 2', function () {
      expect(findPowerOfTwo(1)).toBe("2");
    });
    it('should return 4', function () {
      expect(findPowerOfTwo(2)).toBe("4");
    });
    it('should return ', function () {
      expect(findPowerOfTwo(15)).toBe("32768");
    });

  });
})();
