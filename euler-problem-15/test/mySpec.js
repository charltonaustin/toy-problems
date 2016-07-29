(function () {
  'use strict';
  var findNumberOfRoutes = require('../src/problem.js').findNumberOfRoutes;
  var createGraph = require('../src/problem.js').createGraph;
  describe('createGraph', function () {
    it('should create the correct graph', function () {
      expect(createGraph(2)[0]).toEqual([1,3]);
      expect(createGraph(2)[3]).toEqual([4,6]);
      expect(createGraph(2)[8]).toEqual([]);
    });
  });
  describe('findNumberOfRoutes', function () {
    it('should find the correct number for 2', function () {
      expect(findNumberOfRoutes(2)).toEqual(6);

      expect(findNumberOfRoutes(3)).toEqual(20);

      expect(findNumberOfRoutes(4)).toEqual(70);

      expect(findNumberOfRoutes(5)).toEqual(252);

      expect(findNumberOfRoutes(6)).toEqual(924);

    });
  });

  
 
})();
