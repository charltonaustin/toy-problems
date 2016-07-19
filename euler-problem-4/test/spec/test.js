(function () {
  'use strict';

  describe('isPallidrome', function () {
    it('should return true', function () {
      expect(isPallidrome(1111)).toBe(true);
      expect(isPallidrome(11111)).toBe(true);
      expect(isPallidrome(21012)).toBe(true);
      expect(isPallidrome(2112)).toBe(true);
    });
    it('should return false', function () {
      expect(isPallidrome(1919)).toBe(false);
    });
  });
  
  describe('findPallidromes',function(){
    it('should find 9009',function(){
      expect(findPallidromes(99)).toBe(9009);
    });
  });

  describe('findPallidromes',function(){
    it('should find ???',function(){
      expect(findPallidromes(999)).toBe(906609);
    });
  });
})();
