(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var readInFile = problem.readInFile;
  describe('readInFile',  () => {
    it('check that readInFile returns correct string',  () => {
	var fileReader = {readFileSync: ()=>{return "File contents"}};
	expect(readInFile(fileReader)).toBe("File contents");
    });
  });

  var splitWords = problem.splitWords;
  describe('splitWords',  () => {
    it('check that words are split correctly',  () => {
	expect(splitWords("a,b,c")).toEqual(["a","b","c"]);
    });
  });

  var convertToNumber = problem.convertToNumber;
  describe('convertToNumber',  () => {
    it('check that values get converted correctly',  () => {
	expect(convertToNumber("a")).toBe(1);
	expect(convertToNumber("A")).toBe(1);
	expect(convertToNumber("z")).toBe(26);
	expect(convertToNumber("Z")).toBe(26);
    });
  });
})();
