describe('Greet function', function () {

    it('should return Hello name', function () {
        //assert.equal(2,2);
        assert.deepEqual('Hello, Huli', greet('Huli'));
        // assert.deepEqual([2,2],[2,2]);
    });

    it('should return Hello name', function () {
        //assert.equal(2,2);
        assert.deepEqual('Hello, Tshepo', greet('Tshepo'));
        // assert.deepEqual([2,2],[2,2]);
    });
});