const Player = function (name) {
  this.name = name;
  this.hand = [];
}

Player.prototype.addCard = function(card){
  this.hand.push(card);
}

module.exports = Player;
