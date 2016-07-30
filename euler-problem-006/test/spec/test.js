(function () {
  'use strict';

  describe('findDifferenceOfSquares', function () {
    it('should work for 1', function () {
      expect(findDifferenceOfSquares(1)).toEqual([0]);
    });

    it('should work for 2', function () {
      expect(findDifferenceOfSquares(2)).toEqual([0, 4]);
    });

    it('should work for 10', function(){
      expect(findDifferenceOfSquares(10)[9]).toEqual(2640);
    });

    it('should work for 100', function(){
      expect(findDifferenceOfSquares(100)[99]).toEqual(25164150);
    });
  });
 
})();
