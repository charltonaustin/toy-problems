(function () {
  'use strict';

  describe('isDivisibleCreator', function () {
    var isEven = isDivisibleCreator(2);
    it('should return a function', function () {
      expect(isEven).toEqual(jasmine.any(Function));
    });

    describe('should create an even function', function(){
      it('should return true', function(){
        expect(isEven(2)).toBe(true);
      });
      it('should return false', function(){
        expect(isEven(3)).toBe(false);
      });
    });
  });

  describe('isDivisibleByRangeCreator',function(){
    var isDivisibleByRange123 = isDivisibleByRangeCreator(3);
    it('should create a function',function(){
      expect(isDivisibleByRange123).toEqual(jasmine.any(Function));
    });

    describe('should create isDivisibleByRange123 and', function(){
      it('should return true', function(){
        expect(isDivisibleByRange123(9)).toBe(false);
      });

      it('should return false', function(){
        expect(isDivisibleByRange123(6)).toBe(true);
      });
    });
  });

  describe('smallestDivisbleBy',function(){
    it('should work for number 1 through 10 (2520)',function(){
      expect(smallestDivisbleBy(10)).toBe(2520);
    });

    it('should work for number 1 through 20 ???', function(){
      expect(smallestDivisbleBy(20)).toBe(232792560);
    });
  });
})();
