const { assert } = require('chai');

const messagesText = () => browser.getText('#messages');

describe('User visits root', () => {
    describe('posting a message', () => {
        it('saves the message with the author information', () => {
            const author = 'Inquisitive User';
            const message = 'Why test?';

            browser.url('/');
            browser.setValue('[name=author]', author);
            browser.setValue('[name=message]', message);
            browser.click('[type=submit]');

            assert.include(messagesText(), message);
            assert.include(messagesText(), author);
        });
    });
});
