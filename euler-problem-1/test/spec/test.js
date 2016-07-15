(function () {
  'use strict';

  describe('isMultipleOfThree', function () {
    it('should return false', function () {
      expect(isMultipleOfThree(1)).toBe(false);
    });
    
    it('should return true', function () {
      expect(isMultipleOfThree(3)).toBe(true);
    });
  });


  describe('isMultipleOfFive', function () {
    it('should return false', function () {
      expect(isMultipleOfFive(1)).toBe(false);
    });
    
    it('should return true', function () {
      expect(isMultipleOfFive(5)).toBe(true);
    });
  });

  describe('eulerProblemOne', function(){
    it('should work with 10', function(){
      var actual = eulerProblemOne(10);
      expect(actual).toBe(23);
    });

    it('should work with 1000', function(){
      expect(eulerProblemOne(1000)).toBe(233168);
    });
  });
})();
