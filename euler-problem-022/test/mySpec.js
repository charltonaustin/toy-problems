(function () {
  'use strict';
  var fs = require('fs');
  var problem = require('../src/problem.js');
  var readFile = problem.readFile;
  var totalNameScores = problem.totalNameScores;
  var getScoreOfWord = problem.getScoreOfWord;
  var sortContents = problem.sortContents;
  var contents = fs.readFileSync("./names.txt").toString().split(",");
  var verifyContents = fs.readFileSync("./names.txt").toString().split(",").sort();

  var readFileStub = ()=>{
    return "CHARLIE,BRIAN,THOMAS"
  };
  var sortContentsStub = () => {
    return ["BRIAN","CHARLIE"];
  }

  describe('readFile',  () => {
    it('should return an array of names',  () => {
      expect(readFile(readFileStub)).toEqual(['CHARLIE', 'BRIAN', 'THOMAS']);
    });
  });

  describe('sortContents',  () => {
    it('should return an ordered array',  () => {
      expect(sortContents([9,8,7])).toEqual([7,8,9]);
    });
    it('should return an ordered array',  () => {
      expect(sortContents(["Z", "B", "A"])).toEqual(["A","B","Z"]);
    });
    it('should return an ordered array',  () => {
      expect(sortContents(['CHARLIE', 'BRIAN', 'THOMAS'])).toEqual(['BRIAN', 'CHARLIE', 'THOMAS']);
    });
    it('should return an ordered array',  () => {
      expect(sortContents(['AAAB', 'AAAA'])).toEqual(['AAAA', 'AAAB']);
    });
    it('should return an ordered array',  () => {
      expect(sortContents(['AAAA', 'A'])).toEqual(['A', 'AAAA']);
    });
    it('should return an ordered array',  () => {
      var actual = sortContents(contents);
      expect(actual[0]).toEqual(verifyContents[0]);

    });
  });

  describe('getScoreOfWord',  () => {
    describe('A', () => {
      it('should return the correct score',  () => {
        expect(getScoreOfWord("'A'")).toEqual(1);
      });
    });
    describe('AAAA', () => {
      it('should return the correct score',  () => {
        expect(getScoreOfWord("'AAAA'")).toEqual(1 * 4);
      });
    });
    describe('BRIAN', () => {
      it('should return the correct score',  () => {
        expect(getScoreOfWord("'BRIAN'")).toEqual(44);
      });
    });
    describe('CHARLIE', () => {
      it('should return the correct score',  () => {
        expect(getScoreOfWord("'CHARLIE'")).toEqual(56);
      });
    });
  });

  describe('totalNameScores',  () => {
    describe('for stubbed content', ()=>{
      it('should return a total',  () => {
        expect(totalNameScores(sortContentsStub)).toBe(124);
      });
    });
    describe('for file content', ()=>{
      it('should return a total of ????',  () => {
        expect(totalNameScores()).toBe(871198282);
      });
    });
  });

})();
