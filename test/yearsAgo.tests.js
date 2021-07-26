describe('How many years ago from the current year', function () {

    it('This should return 45', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it('This should return 21', function () {
        assert.equal((new Date().getFullYear() - 2000), 21);

    });
});