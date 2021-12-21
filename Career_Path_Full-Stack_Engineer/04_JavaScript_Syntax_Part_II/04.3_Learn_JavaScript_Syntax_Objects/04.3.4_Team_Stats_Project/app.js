const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11,
        },
        {
            firstName: 'Julio',
            lastName: 'Martinez',
            age: 10,
        },
        {
            firstName: 'Joao',
            lastName: 'Pinto',
            age: 10,
        },
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27,
        },
        {
            opponent: 'Colts',
            teamPoints: 41,
            opponentPoints: 24,
        },
        {
            opponent: 'Redskins',
            teamPoints: 44,
            opponentPoints: 22,
        },
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age,
        };
        this.players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent,
            teamPoints,
            opponentPoints,
        };
        this.games.push(game);
    },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Broncos', 40, 23);
team.addGame('Colts', 35, 29);
team.addGame('Redskins', 30, 30);
console.log(team.games);
