const assert = require('assert');
const fs = require('fs');
let path, str;

describe('appendFileSync', () => {
    it('creates a new file with a string of text', () => {

        // Setup
        path = './message.txt';
        str = 'Hello Node.js';

        // Exercise: write to file
        fs.appendFileSync(path, str);

        // Verify: compare file contents to string
        const contents = fs.readFileSync(path);
        assert.equal(contents.toString(), str);

        // Teardown: restore file
        fs.unlinkSync(path);
    });

    it('creates a new file with a string of text', () => {

        // Setup
        path = './message.txt';
        str = '';

        // Exercise: write to file
        fs.appendFileSync(path, str);

        // Verify: compare file contents to string
        const contents = fs.readFileSync(path);
        assert.equal(contents.toString(), str);

        // Teardown: restore file
        fs.unlinkSync(path);
    });
});
