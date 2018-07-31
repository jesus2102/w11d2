const assert = require("assert");
const Card = require("../card.js");
const Player = require("../player.js");
const Game = require("../game.js");

describe("Game", function () {

  let card1;
  let card2;
  let player1;
  let player2;
  let game;

  beforeEach(function(){
    card1 = new Card("Superman", 6, 9, 7);
    card2 = new Card("Batman", 10, 5, 6);
    player1 = new Player("Jesus");
    player2 = new Player("Iona");
    game = new Game(player1, player2);
  });

  it("should have player1", function () {
    const result = game.player1.name;
    assert.strictEqual(result, "Jesus");
  });
  it("should have player2", function () {
    const result = game.player2.name;
    assert.strictEqual(result, "Iona");
  });

  it("should have a deck", function () {
    const result = game.deck.length;
    assert.deepStrictEqual(result, 0);
  });

});
