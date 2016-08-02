(function () {
  'use strict';
  var problem = require('../src/problem.js')
  var findMaximumTotal = problem.findMaximumTotal;
  var bigTriangle = "75\n95 64\n17 47 82\n18 35 87 10\n20 4 82 47 65\n19 1 23 75 3 34\n88 2 77 73 7 63 67\n99 65 4 28 6 16 70 92\n41 41 26 56 83 40 80 70 33\n41 48 72 33 47 32 37 16 94 29\n53 71 44 65 25 43 91 52 97 51 14\n70 11 33 28 77 73 17 78 39 68 17 57\n91 71 52 38 17 14 91 43 58 50 27 29 48\n63 66 4 68 89 53 67 30 73 16 69 87 40 31\n4 62 98 27 23 9 70 98 73 93 38 53 60 4 23\n";
  describe('findMaximumTotal',()=>{
    it('should find the max of a single element triangle', ()=>{
      expect(findMaximumTotal("3")).toBe(3);
    });
    it('should find the max of a three element triangle', ()=>{
      expect(findMaximumTotal("3\n 7 4\n")).toBe(10);
    });
    it('should find the max of a three row triangle', ()=>{
      expect(findMaximumTotal("3\n 7 4\n 2 4 6\n")).toBe(14);
    });
    it('should find the max of a four row triangle', ()=>{
      expect(findMaximumTotal("3\n 7 4\n 2 4 6\n8 5 9 3")).toBe(23);
    });
    it('should find the max of a four row triangle', ()=>{
      expect(findMaximumTotal(bigTriangle)).toBe(1074);
    });
  });
})();
