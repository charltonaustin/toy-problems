(function () {
  'use strict';

  describe('isEven', function () {
    it('should return true', function () {
      expect(isEven(2)).toBe(true);
    });
    it('should return false', function(){
      expect(isEven(3)).toBe(false);
    });
  });

  describe('generateNextFibonacciNumber', function(){
    it('should return 3', function(){
      expect(generateNextFibonacciNumber(1,2)).toBe(3);
    });

    it('should return 5', function(){
      expect(generateNextFibonacciNumber(2,3)).toBe(5);
    });
  });

  describe('getSumOfEvens',function(){
    it('should return 10 for less than 12',function(){
      expect(getSumOfEvens(12)).toBe(10);
    });
    it('should be 44 for less than 50', function(){
      expect(getSumOfEvens(50)).toBe(44);
    });
    it('should be ?? for less than 1,000,000', function(){
      expect(getSumOfEvens(1000000)).toBe(1089154);
    });
  });
})();
