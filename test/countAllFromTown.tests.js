describe('this counts how many registrations from a certain town', function () {

    it('it should return 3 from stellies', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
       assert.equal(fromStellies, 3)   

        //assert.equal(3, countAllFromTown(strng, strtStrng));


    });

    it('this should return 1 from fromKuilsriver', function () {
        
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)
    });
});