const app = require('./app');
const port = process.env.PORT || require('./server.config').test.port;
const { mongoose, databaseUrl, options } = require('./database');

let expressServer;

exports.config = {
    specs: [
        'test/features/*.js',
    ],
    coloredLogs: true,
    baseUrl: `http://localhost:${port}/`,
    framework: 'mocha',
    reporters: ['spec'],
    waitforTimeout: 10 * 1000,
    capabilities: [{
        browserName: 'phantomjs',
    }],
    services: ['phantomjs'],

    async beforeTest() {
        await mongoose.connect(databaseUrl, options);
        await mongoose.connection.db.dropDatabase();
        expressServer = app.listen(port);
    },

    async afterTest() {
        await mongoose.disconnect();
        expressServer.close();
    },
};
