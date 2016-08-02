(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findSundaysOnFirst = problem.findSundaysOnFirst;
  var getEndOfTheMonth = problem.getEndOfTheMonth;
  describe('findSundaysOnFirst',  () => {
    it('should find total Sundays on the first',  () => {
      expect(findSundaysOnFirst()).toBe(171);
    });
  });
  describe('getEndOfTheMonth', () => {
    it('should return days for Jan.', ()=>{
      expect(getEndOfTheMonth(1900, 1)).toBe(31);
    });
    it('should return days for Feb.', ()=>{
      expect(getEndOfTheMonth(1900, 2)).toBe(28);
      expect(getEndOfTheMonth(2000, 2)).toBe(29);
      expect(getEndOfTheMonth(2004, 2)).toBe(29);
      expect(getEndOfTheMonth(1987, 2)).toBe(28);
    });
    it('should return days for March.', ()=>{
      expect(getEndOfTheMonth(1900, 3)).toBe(31);
    });
    it('should return days for April', ()=>{
      expect(getEndOfTheMonth(1900, 4)).toBe(30);
    });
    it('should return days for May', ()=>{
      expect(getEndOfTheMonth(1900, 5)).toBe(31);
    });
    it('should return days for June', ()=>{
      expect(getEndOfTheMonth(1900, 6)).toBe(30);
    });
    it('should return days for July', ()=>{
      expect(getEndOfTheMonth(1900, 7)).toBe(31);
    });
    it('should return days for Aug.', ()=>{
      expect(getEndOfTheMonth(1900, 8)).toBe(31);
    });
    it('should return days for Sept.', ()=>{
      expect(getEndOfTheMonth(1900, 9)).toBe(30);
    });
    it('should return days for Oct.', ()=>{
      expect(getEndOfTheMonth(1900, 10)).toBe(31);
    });
    it('should return days for Nov.', ()=>{
      expect(getEndOfTheMonth(1900, 11)).toBe(30);
    });
    it('should return days for Dec.', ()=>{
      expect(getEndOfTheMonth(1900, 12)).toBe(31);
    });
  });
})();
