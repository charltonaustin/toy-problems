(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var findPandigital = problem.findPandigital;
  describe('findPandigital',  () => {
    it('should find 12 from 4312',  () => {
      var alreadyFound = {};
      findPandigital("4312", alreadyFound);
      expect(alreadyFound[12]).toBe(true);
    });
  });
  var isNotIdentity = problem.isNotIdentity;
  describe('isNotIdentity',  () => {
    it('should be true',  () => {
      expect(isNotIdentity([2,1,3])).toBe(true);
    });
    it('should be false',  () => {
      expect(isNotIdentity([1,2,3])).toBe(false);
    });
  });
  var findSum = problem.findSum;
  describe('findSum',  () => {
    it('should find sum',  () => {
      expect(findSum()).toBe(45228);
    });
  });
})();
