const assert = require("assert");
const Card = require("../card.js");
const Player = require("../player.js");

describe("Player", function () {

  let player;
  let card;

  beforeEach(function () {
    card = new Card("Superman", 6, 9, 7);
    player = new Player("Jesus")
  });

  it("should have a name", function(){
    const result = player.name;
    assert.strictEqual(result, "Jesus");
  });

  it("should have a hand", function(){
    const result = player.hand.length;
    assert.strictEqual(result, 0);
  });

  it("should be able to add card to hand", function(){
    player.addCard(card);
    const result = player.hand.length;
    assert.strictEqual(result, 1);
  })
});
