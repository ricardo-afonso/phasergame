function loadAssets() {
  // ==================================================================
  // Load the necessary assets
  game.load.tilemap("questMap", "assets/quest.json", null, Phaser.Tilemap.TILED_JSON);
  game.load.image("tilesheet", "assets/tilesheet.png");
  game.load.image("npc", "assets/npc.png");
  game.load.spritesheet("player", "assets/player.png", 64, 64);

  // TODO load these from a spritesheet
  game.load.image("slot", "assets/slot.png");
  game.load.image("guitar", "assets/guitar.png");
  game.load.image("ball", "assets/ball.png");
  game.load.image("ladder", "assets/ladder.png");
  game.load.image("beer", "assets/beer.png");
  game.load.image("key", "assets/key.png");
  game.load.image("surf", "assets/surf.png");

}

function createSlot() {
  questItems.slot = game.add.tileSprite(30, 30, 70, 70, "slot");
};

function createMap() {
  // ==================================================================
  // Load the tilemap and images.
  map = game.add.tilemap("questMap");
  map.addTilesetImage("tilesheet");
  map.addTilesetImage("npc");

  // ==================================================================
  // Iterate over map layers and create game Layers
  map.layers.forEach(function(entry) {
    layers.push(map.createLayer(entry.name));
  });

  questItems.slot = game.add.tileSprite(30, 30, 70, 70, "slot");
  questItems.slot.fixedToCamera = true;


  // ==================================================================
  // Sets the first layer to be "collidable". 5000 is a conservative value to make
  // sure all tiles are set.
  map.setCollisionBetween(1, 5000);

  //layers[0].debug = true;

  // ==================================================================
  // Scale things according to the ground layer
  layers[0].resizeWorld();


};
