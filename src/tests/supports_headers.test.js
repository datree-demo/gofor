describe('Gofor', () => {
    describe('supportsHeaders', () => {
        const Headers = global.Headers;

        afterEach(() => {
            global.Headers = Headers;
        });

        it('Does not convert headers when Headers is unavailable', () => {
            delete require.cache[require.resolve('..')];
            global.Headers = null;
            const Gofor = require('..');
            const gofor = new Gofor();

            assert(!gofor.supportsHeaders, 'Headers are not supported');
        });
    });
});
