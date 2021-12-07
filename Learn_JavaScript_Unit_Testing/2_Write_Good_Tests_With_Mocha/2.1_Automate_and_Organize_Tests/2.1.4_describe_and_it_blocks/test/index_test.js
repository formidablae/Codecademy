describe('Math', () => {
    describe('.min', () => {
        it('returns the argument with the lowest value', () => {
            assert.equal(Math.min(1, 2, 3, 4, 5), 1);
        });
    });
});
