describe('finds out if the parameter passed in is a day of the week (ie. Not a weekend day)', function () {

    it('This should return false', function () {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('This should return true', function () {
        assert.equal(isWeekday('Monday'), true);
    });
});