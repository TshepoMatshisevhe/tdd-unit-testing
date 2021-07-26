describe('Calculates the total bill for the data provided', function () {

    it('This should return "R7.75" ', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('This should return "R3.40"', function () {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('This should return "R31.30"', function () {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    });

});