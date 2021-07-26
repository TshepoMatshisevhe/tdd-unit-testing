describe('Returns the right price based on the shift you are working', function () {

    it('Should return R20', function () {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('Should return R10', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('Should return free', function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

    });
});