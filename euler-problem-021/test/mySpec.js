(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var properDivisors = problem.properDivisors;
  var findSumOfAmicableNumbers = problem.findSumOfAmicableNumbers;
  var hasAmicableNumberLessThan = problem.hasAmicableNumberLessThan;

  describe('properDivisors',  () => {
    describe('of 1', ()=>{
      it('should return 1',  () => {
        expect(properDivisors(1)).toEqual([]);
      });
    })
    describe('of 2', ()=>{
      it('should return 2',  () => {
        expect(properDivisors(2)).toEqual([1]);
      });
    })
    describe('of 10', ()=>{
      it('should return 1 2 5',  () => {
        expect(properDivisors(10)).toEqual([1, 2, 5]);
      });
    })
    describe('of 25', ()=>{
      it('should return 1 5',  () => {
        expect(properDivisors(25)).toEqual([1, 5]);
      });
    })
    describe('of 220', ()=>{
      it('should return 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110',  () => {
        expect(properDivisors(220)).toEqual([1, 2, 110, 4, 55, 5, 44, 10, 22, 11, 20]);
      });
    })
  });

  describe('hasAmicableNumberLessThan',()=>{
    it('should find 284 for 220',()=>{
      expect(hasAmicableNumberLessThan(1000, 220)).toBe(284);
    });
    it('should find nothing for 6',()=>{
      expect(hasAmicableNumberLessThan(1000, 6)).toBe(false);
    });
    it('should find nothing for 8',()=>{
      expect(hasAmicableNumberLessThan(1000, 8)).toBe(false);
    });
  });

  describe('findSumOfAmicableNumbers',()=>{
    it('should return ??? for 1000',()=>{
      expect(findSumOfAmicableNumbers(10000)).toBe(31626);
    });
  });
})();
