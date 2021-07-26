describe('Vehicle registration numbers', function () {

    it('This should return "true" ', function () {
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('This should return "false"', function () {
        assert.equal(isFromBellville('CJ 123'), false);
    });
});