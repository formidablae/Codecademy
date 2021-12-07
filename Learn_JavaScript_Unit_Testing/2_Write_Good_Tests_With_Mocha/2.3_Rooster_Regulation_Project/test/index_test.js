const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', function() {
    describe('.announceDawn()', function() {
        it('returns a rooster call', function() {
            // Define expected output
            const expected = 'cock-a-doodle-doo!';

            // Call Rooster.announceDawn and store result in variable
            const actual = Rooster.announceDawn();

            // Use an assert method to compare actual and expected result
            assert.equal(expected, actual);
        });
    });

    describe('.timeAtDawn()', function() {
        it('returns its argument as a string', function() {
            // Time parameter
            const timePram = 15;

            // Define expected output
            const expected = timePram.toString();

            // Call Rooster.timeAtDawn and store result in variable
            const actual = Rooster.timeAtDawn(timePram);

            // Use an assert method to compare actual and expected result
            assert.strictEqual(expected, actual);
        });

        it('throws an error if passed a number less than 0', function() {
            // Time parameter
            const timePram = -1;

            // Use an assert method to compare actual and expected result
            assert.throws(() => Rooster.timeAtDawn(timePram), Error);
        });

        it('throws an error if passed a number greater than 23', function() {
            // Time parameter
            const timePram = 24;
            
            // Use an assert method to compare actual and expected result
            assert.throws(() => Rooster.timeAtDawn(timePram), Error);
        });

        it('does not throw an error if passed a number between 0 and 23 both inclusive', function () {
            // Time parameters
            const timePram1 = 0;
            const timePram2 = 1;
            const timePram3 = 7;
            const timePram4 = 22;
            const timePram5 = 23;

            // Use an assert method to compare actual and expected result
            assert.doesNotThrow(() => Rooster.timeAtDawn(timePram1), Error);
            assert.doesNotThrow(() => Rooster.timeAtDawn(timePram2), Error);
            assert.doesNotThrow(() => Rooster.timeAtDawn(timePram3), Error);
            assert.doesNotThrow(() => Rooster.timeAtDawn(timePram4), Error);
            assert.doesNotThrow(() => Rooster.timeAtDawn(timePram5), Error);
        });
    });
});
