var game = new Phaser.Game(960, 600, Phaser.AUTO, "game", {
  preload: preload,
  create: create,
  update: update,
  render: render
});


var map;
var tileset;

function preload() {
  loadAssets();
}


function create() {

  // TODO add a start screen
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = "#A8DBFF";
  game.physics.arcade.gravity.y = 700;

  createMap();
  createPlayer();
  createPlayerAnimations();
  createKeys();
}

function update() {

  game.physics.arcade.collide(player, layers[0]);
  playerMovement();
  checkPlayerDeath();
  /*
    if (debugButton.isDown) {
      for (i = 0; i < layers.length; i++) {
        console.log(i + ": -> " + layers[i].layer.name)
      }
    } */
}


function render() {
  checkPlayerAreas();
  //  game.debug.text(game.time.physicsElapsed, 32, 32);
  //  game.debug.body(player);
  //  game.debug.bodyInfo(player, 16, 24);
}
