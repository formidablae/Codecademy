function proclaim(status) {
    console.log(`I'm ${status || 'not ready...'}`);
}
proclaim();
proclaim('ready?');
proclaim('ready!');
