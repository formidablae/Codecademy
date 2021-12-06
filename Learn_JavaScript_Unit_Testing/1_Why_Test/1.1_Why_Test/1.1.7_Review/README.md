# why-test-web-app

A sample web app for exploratory and internal training purposes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Installing

Clone this repo.

```
$ git clone https://github.com/thoughtbot/why-test-web-app.git
```

Run the `setup` script to check for and install dependencies for setup.

```
$ bin/setup
```

To have launchd start mongodb now and restart at login:

```
$ brew services start mongodb
```

Or, if you don't want/need a background service you can just run:

```
$ mongod --config /usr/local/etc/mongod.conf
```

Start up the server.

```
$ npm start
```

Confirm it's working by navigating to [localhost:3000](localhost:3000).


## Running the tests

Run the test suite with the `test` script.

```
$ npm test
```
