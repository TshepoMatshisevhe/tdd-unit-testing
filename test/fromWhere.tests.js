describe('From where exactly', function () {

    it('This should return "Bellville"', function () {
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it('This shoulod return Paarl', function () {
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('This should return Cape Town', function () {
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('This should return "Somke other place"', function () {
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
});