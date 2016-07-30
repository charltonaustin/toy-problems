(function () {
  'use strict';
  var findNumberOfRoutes = require('../src/problem.js');
  describe('findNumberOfRoutes', function () {
    it('should find the correct number for 2', function () {
      expect(findNumberOfRoutes(2)).toEqual(6);

      expect(findNumberOfRoutes(3)).toEqual(20);

      expect(findNumberOfRoutes(4)).toEqual(70);

      expect(findNumberOfRoutes(5)).toEqual(252);

      expect(findNumberOfRoutes(6)).toEqual(924);

      expect(findNumberOfRoutes(20)).toEqual(137846528820);
    });
  });
})();
