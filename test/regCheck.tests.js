describe('Check if a registration number is for GP, L, EC, MP registration plates.', function () {

    it('Should return true', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('Should return false', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('Should return true', function () {

        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it('Should return false', function () {
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('Should return true', function () {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it('Should return false', function () {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('Should return true', function () {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it('Should return false', function () {
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});