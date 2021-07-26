describe('The buyMinutes function', function () {


    it('it should return R1.85 if I buy 1 minute', function () {
        assert.equal(1.85, buyMinutes(1));

    });


    it('it should return R12.95 if I buy 7 minutes', function () {
        assert.equal(12.95, buyMinutes(7));

    });


    it.skip('it should return R20.35 if I buy 11 minutes - no longer valid', function () {
        assert.equal(20.35, buyMinutes(11));

    });


    it('it should return R42.55 if I buy 23 minutes', function () {
        assert.equal(42.55, buyMinutes(23));

    });


    it('it should return R90.65 if I buy 49 minutes', function () {
        assert.equal(90.65, buyMinutes(49));

    });


    it('it should return R92.50 if I buy 50 minutes', function () {
        assert.equal(92.50, buyMinutes(50));

    });


    it('it should return R68.85 if I buy 51 minutes -as minutes are cheaper for R50+', function () {
        assert.equal(68.85, buyMinutes(51));

    });


    it('it should return R76.95 if I buy 57 minutes -as minutes are cheaper for R50+', function () {
        assert.equal(76.95, buyMinutes(57));

    });

    it('should return "Please insert correct amount" if I buy no minutes', function () {
        assert.equal("Please insert correct amount", buyMinutes(0));

    });

    it('should return "Please insert correct amount" if I no parameter is passed in', function () {
        assert.equal("Please insert correct amount", buyMinutes(0));

    });
    it('it should return R10.45 if I buy 11 minutes  - 11 minutes promotion', function () {
        assert.equal(10.45, buyMinutes(11));

    });

    it('should return R52.25 if I buy 55 minutes ', function () {
        assert.equal(52.25, buyMinutes(55));

    });

    it('should return R114.95 if I buy 121 minutes', function () {
        assert.equal(114.95, buyMinutes(121));

    });


});