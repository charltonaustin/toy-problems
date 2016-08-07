(function () {
  'use strict';
  var problem = require('../src/problem.js');

  var swap = problem.swap;
  describe('swap',  () => {
    it('should switch two elements',  () => {
      expect(swap(0, 1, [1, 2])).toEqual([2, 1]);
    });
  });

  var findLargestPosition = problem.findLargestPosition;
  describe('findLargestPosition',  () => {
    it('should find i such that a_i < a_i+1',  () => {
      expect(findLargestPosition([3,1,2])).toEqual(1);
    });
    it('should return -1 if elements are in order',  () => {
      expect(findLargestPosition([3,2,1])).toEqual(-1);
    });
  });

  var findSmallestPositionToRight = problem.findSmallestPositionToRight;
  describe('findSmallestPositionToRight',  () => {
    it('should find i such that a_i is less than everything to the right and greater than a_position',  () => {
      expect(findSmallestPositionToRight([3, 1, 4, 3, 2, 6, 9], 1)).toEqual(4);
    });
  });

  var reOrderRemaining = problem.reOrderRemaining;
  describe('reOrderRemaining',  () => {
    it('should reoder everything to the right',  () => {
      expect(reOrderRemaining([3, 2, 4, 3, 1, 6, 9], 1)).toEqual([3, 2, 1, 3, 4, 6, 9]);
    });
  });

  var findNextPermutation = problem.findNextPermutation;
  describe('findNextPermutation',  () => {
    it('should return the next permutation',  () => {
      expect(findNextPermutation([0, 1, 2])).toEqual([0, 2, 1]);
      expect(findNextPermutation([0, 2, 1])).toEqual([1, 0, 2]);
      expect(findNextPermutation([1, 0, 2])).toEqual([1, 2, 0]);
      expect(findNextPermutation([1, 2, 0])).toEqual([2, 0, 1]);
      expect(findNextPermutation([2, 0, 1])).toEqual([2, 1, 0]);
      expect(findNextPermutation([2, 1, 0])).toEqual([0, 1, 2]);
    });
  });

  var findPermutation = problem.findPermutation;
  describe('findPermutation',  () => {
    it('should return the specified permutation',  () => {
      expect(findPermutation([0, 1, 2], 1)).toEqual([0, 1, 2]);
      expect(findPermutation([0, 1, 2], 6)).toEqual([2, 1, 0]);
    });
    it('should return millionth permutation',  () => {
      expect(findPermutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1000000)).toEqual([ 2, 7, 8, 3, 9, 1, 5, 4, 6, 0]);
    })
  });

})();
