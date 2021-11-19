//this creates an information board about teams and scores



const team = { 
  _players: [{firstName:'Pablo', lastName:'Sanchez', age:11}],
  _games: [{opponent:'Broncos',teamPoints:42,opponentsPoints:27}],

  get players() { return this._players;},
  get games() {return this._games;},

  addPlayer(firstName,lastName,age)
  {
    const player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },
 _games: [
    {
      opponent: 'Knicks', 
      teamPoints: 120, 
      opponentPoints: 60
    }
  ],
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }

};

team.addPlayer('Steph','Curry', 28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans', 100, 98);
console.log(team.players);
