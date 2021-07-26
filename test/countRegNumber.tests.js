describe('Returns the number of registration numbers in the string', function () {

    it('This should return 3', function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('This should return 1', function () {
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);

    });
});