(function () {
  'use strict';

  describe('Create writer', function () {

    describe('when called', function () {

      it('should return correct type', function () {
        expect(createWriter()).toEqual(jasmine.any(Function));
      });

    });

  });
  
  describe('writer with w', function () {
    var length = 10;
    var defaultInput ="a b c d e f g h"; 
    var writer = createWriter(length);

    describe('when called', function(){

      it('should return empty output', function(){
        expect(writer("")).toBe("");
      });

      it('should return as many chars as possible', function() {
        expect(writer(defaultInput).split("\n")[0].length).toBe(9);
      });

      it('should return as many words as possible', function(){
        var output = writer("I am a cat what are you?").split("\n");
        expect(output[0].length).toBe(10);
        expect(output[1].length).toBe(8);
        expect(output[2].length).toBe(4);
      });
     
      it('should deal with new lines', function(){
        var output = writer("Do you know the muffin man?\nThe muffing man?\nThe muffin man?").split("\n");
        expect(output[0].length).toBe(6);
        expect(output[1].length).toBe(8);
        expect(output[2].length).toBe(4);
      });

    });
  });
})();
