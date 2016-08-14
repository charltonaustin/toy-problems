(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var countElements = problem.countElements;
  describe('countElements',  () => {
    it('should return 0 for size 1',  () => {
      expect(countElements(0)).toBe(1);
    });
    it('should return 1 for size 4',  () => {
      expect(countElements(1)).toBe(4);
    });
    it('should return 2 for size 9',  () => {
      expect(countElements(2)).toBe(9);
    });
    it('should return 3 for size 16',  () => {
      expect(countElements(3)).toBe(16);
    });
    it('should return 4 for size 25',  () => {
      expect(countElements(4)).toBe(25);
    });
    it('should return 5 for size 36',  () => {
      expect(countElements(5)).toBe(36);
    });
    it('should return 6 for size 49',  () => {
      expect(countElements(6)).toBe(49);
    });
  });
  var createMatrix = problem.createMatrix;
  describe('createMatrix',  () => {
    it('should create a 2 by 2 matrix',  () => {
      expect(JSON.stringify(createMatrix(1, 0, 4))).toEqual(JSON.stringify([[1, 2],[4,3]]));
    });
  });
  describe('createMatrix',  () => {
    it('should create a 3 by 3',  () => {
      expect(JSON.stringify(createMatrix(2, 1, 9))).toEqual(JSON.stringify([[7,8,9],[6,1,2],[5, 4, 3]]));
    });
  });
  describe('createMatrix',  () => {
    it('should create a 4 by 4',  () => {
      expect(JSON.stringify(createMatrix(3, 1, 16))).toEqual(JSON.stringify([[7,8,9,10],[6,1,2,11],[5, 4, 3,12],[16,15,14,13]]));
    });
  });
  var sumDiagonals = problem.sumDiagonals;
  describe('sumDiagonals',  () => {
    it('should sum a 2 by 2 matrix',  () => {
      expect(sumDiagonals([[1,2],[4,3]])).toEqual(10);
    });
    it('should sum a 3 by 3 matrix',  () => {
      expect(sumDiagonals([[7,8,9],[6,1,2],[5,4,3]])).toEqual(25);
    });
    it('should sum a 5 by 5 matrix',  () => {
      expect(sumDiagonals([[21,22,23,24,25],[20,7,8,9,10],[19,6,1,2,11],[18,5,4,3,12],[17,16,15,14,13]])).toEqual(101);
    });
  });
  var findSum = problem.findSum;
  describe('findSum',  () => {
    it('should sum a 5 by 5',  () => {
      expect(findSum(5)).toEqual(101);
    });
    it('should sum a 2 by 2',  () => {
      expect(findSum(2)).toEqual(10);
    });
    it('should sum a 3 by 3',  () => {
      expect(findSum(3)).toEqual(25);
    });
    it('should sum a 1001 by 1001',  () => {
      expect(findSum(1001)).toEqual(669171001);
    });
  });
})();
