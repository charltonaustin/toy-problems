(function () {
  'use strict';

  describe('Create writer', function () {
    describe('when called', function () {
      it('should return correct type', function () {
        expect(createWriter()).toEqual(jasmine.any(Function));
      });
    });
  });
})();
