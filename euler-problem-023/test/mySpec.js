(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var isAbundantNumber = problem.isAbundantNumber;
  var findAbundantNumbersLessThan = problem.findAbundantNumbersLessThan;
  var allPossibleNumbers = problem.allPossibleNumbers;
  var filterOutMultiplesOfAbundantNumbers = problem.filterOutMultiplesOfAbundantNumbers;
  var filterOutSumsOfAbundantNumbers = problem.filterOutSumsOfAbundantNumbers;
  var sumNumbers = problem.sumNumbers;
  var findSum = problem.findSum;

  describe('isAbundantNumber',  () => {
    it('should return true',  () => {
      expect(isAbundantNumber(12)).toBe(true);
      expect(isAbundantNumber(18)).toBe(true);
      expect(isAbundantNumber(20)).toBe(true);
      expect(isAbundantNumber(24)).toBe(true);
      expect(isAbundantNumber(30)).toBe(true);
      expect(isAbundantNumber(36)).toBe(true);
      expect(isAbundantNumber(40)).toBe(true);
      expect(isAbundantNumber(42)).toBe(true);
      expect(isAbundantNumber(48)).toBe(true);
    });
    it('should return false',  () => {
      expect(isAbundantNumber(2)).toBe(false);
      expect(isAbundantNumber(19)).toBe(false);
      expect(isAbundantNumber(21)).toBe(false);
      expect(isAbundantNumber(25)).toBe(false);
      expect(isAbundantNumber(32)).toBe(false);
      expect(isAbundantNumber(37)).toBe(false);
      expect(isAbundantNumber(41)).toBe(false);
      expect(isAbundantNumber(43)).toBe(false);
    });
  });

  describe('findAbundantNumbersLessThan',  () => {
    describe('of 13', ()=>{
      it('should return [12]',  () => {
        expect(findAbundantNumbersLessThan(13)).toEqual([12]);
      });
    });
    describe('of 31', ()=>{
      it('should return [12, 18, 20, 24, 30]',  () => {
        expect(findAbundantNumbersLessThan(31)).toEqual([12, 18, 20, 24, 30]);
      });
    });
  });

  describe('allPossibleNumbers',  () => {
    describe('for 3', ()=>{
      it('should return [1, 2]',  () => {
        expect(allPossibleNumbers(3)).toEqual([1,2]);
      });
    });
    describe('for 6', ()=>{
      it('should return [1, 2, 3, 4, 5]',  () => {
        expect(allPossibleNumbers(6)).toEqual([1,2,3,4,5]);
      });
    });
  });

  describe('filterOutMultiplesOfAbundantNumbers',  () => {
    describe('for [12] and [12,24,36,37]', ()=>{
      it('should return [37]',  () => {
        expect(filterOutMultiplesOfAbundantNumbers([12], [12, 24, 36, 37])).toEqual([37]);
      });
    });
    describe('for [12, 20] and [12, 36, 40, 80, 37]', ()=>{
      it('should return [37]',  () => {
        expect(filterOutMultiplesOfAbundantNumbers([12, 20], [12, 36, 37, 40, 80])).toEqual([37]);
      });
    });
  });

  describe('filterOutSumsOfAbundantNumbers',  () => {
    describe('for [12,20] and [32, 37, 64]', ()=>{
      it('should return [37, 64]',  () => {
        expect(filterOutSumsOfAbundantNumbers([12, 20], [32, 37, 64])).toEqual([37, 64]);
      });
    });
  });

  describe('sumNumbers',  () => {
    describe('for [1,2,3]', ()=>{
      it('should return 6',  () => {
        expect(sumNumbers([1,2,3])).toEqual(6);
      });
    });
  });

  describe('findSum',  () => {
    it('should return ???',  () => {
      expect(findSum()).toEqual(4179871);
    });
  });
})();
