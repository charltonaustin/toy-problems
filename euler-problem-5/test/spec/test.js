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
})();
