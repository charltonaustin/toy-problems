(function () {
  'use strict';
  var problem = require('../src/problem.js')
  var findMaximumTotal = problem.findMaximumTotal;
  var parseTriangle = problem.parseTriangle;
  var depthFirst = problem.depthFirst;

  describe('parseTriangle', function () {
    it('should return a tree', function () {
      expect(parseTriangle("1\n2 3").value).toEqual(1);
      expect(parseTriangle("1\n2 3").left.value).toEqual(2);
      expect(parseTriangle("1\n2 3").right.value).toEqual(3);
    });
    it('should a larger tree', function () {
      expect(parseTriangle("3 \n 7 4 \n  2 4 6\n   8 5 9 3").left.left.value).toEqual(2);
      expect(parseTriangle("3 \n 7 4 \n  2 4 6\n   8 5 9 3").right.right.value).toEqual(6);
    });
  });

  describe('depthFirst', function () {
    it('should an array for triangle with four levels', function () {
      expect(depthFirst(parseTriangle("1\n2 3"))).toEqual([3, 4]);
    });
  });

  describe('findMaximumTotal', function () {
    it('should return the max', function () {
      expect(findMaximumTotal("1\n2 3")).toBe(4);
      expect(findMaximumTotal("3 \n 7 4 \n  2 4 6\n   8 5 9 3")).toBe(23);
      expect(findMaximumTotal("75\n95 64\n17 47 82\n18 35 87 10\n20 04 82 47 65\n19 01 23 75 03 34\n88 02 77 73 07 63 67\n99 65 04 28 06 16 70 92\n41 41 26 56 83 40 80 70 33\n41 48 72 33 47 32 37 16 94 29\n53 71 44 65 25 43 91 52 97 51 14\n70 11 33 28 77 73 17 78 39 68 17 57\n91 71 52 38 17 14 91 43 58 50 27 29 48\n63 66 04 68 89 53 67 30 73 16 69 87 40 31\n04 62 98 27 23 09 70 98 73 93 38 53 60 04 23\n")).toBe(1074);
    });
  });
})();
