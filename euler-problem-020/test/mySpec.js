(function () {
  'use strict';

  var problem = require('../src/problem.js');
  var factorial = problem.factorial;
  var sumOfFactorial = problem.sumOfFactorial;
  var times = problem.times;

  describe('factorial',  () => {
    describe('10', ()=>{
      it('should return 3628800',  () => {
        expect(factorial(10)).toBe('3628800');
      });
    });
  });

  describe('sumOfFactorial',  () => {
    describe('10', ()=>{
      it('should return 27',  () => {
        expect(sumOfFactorial(10)).toBe(27);
      });
    });
    describe('100', ()=>{
      it('should return 648',  () => {
        expect(sumOfFactorial(100)).toBe(648);
      });
    });
  });

  describe('times',  () => {
    describe('21 and 43', ()=>{
      it('should return 27',  () => {
        expect(times("21", "43")).toBe("903");
      });
    });
    describe('2 and 2', ()=>{
      it('should return 4',  () => {
        expect(times("2", "2")).toBe("4");
      });
    });
    describe('21 and 2', ()=>{
      it('should return 4',  () => {
        expect(times("21", "2")).toBe("42");
      });
    });
    describe('2 and 21', ()=>{
      it('should return 4',  () => {
        expect(times("2", "21")).toBe("42");
      });
    });
  });

})();
