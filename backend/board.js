class Game {
  constructor(playerCount) {
    this.playerCount = playerCount;
    this.gameOn = true;
    this.vacationCash = 0;
    this.jail = [];
    this.players = [];
    for (i = 0; i < this.playerCount; i++) {
      this.players.push(new Player(i));
    }
  }
}

class Player {
  constructor(playerId) {
    this.playerId = playerId;
    this.color = colors[playerId];
    this.cash = 1500;
    this.properties = new Set();
    this.mortgagedProperties = new Set();
    this.utilitiesOwned = 0;
    this.airportsOwned = 0;
  }
}

class Property {
  constructor(property) {
    this.id = property.id;
    this.name = property.city;
    this.color = property.flag;
    this.price = property.price;
    this.isOwned = false;
    this.isMortgaged = false;
    this.owner = -1;
    this.housesOwned = 0;
    this.hotelsOwned = 0;
    this.rents = property.rents;
  }

  getRent() {
    return this.rents[housesOwned + hotelsOwned];
  }

  mortgage() {
    this.isMortgaged = true;
    Game.players[this.owner].cash += price / 2;
    Game.players[this.owner].mortgagedProperties.add(this.id);
  }
}

const colors = ["green", "blue", "red", "yellow"];
