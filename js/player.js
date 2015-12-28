// ==================================================================
// Items for game completion

var questItems = {
  slot: null,
  guitar: null,
  ball: null,
  ladder: null,
  key: null,
  surf: null,
  academia: null,
  searching: false

};

var talkingTo = {
  daniel: false,
  claudia: false,
  surf: false,
  anto: false,
  lopo: false,
  campelo: false,
  academia: false
}


function createPlayer() {
  // ==================================================================
  // Create the player near the left edge
  player = game.add.sprite(32, game.world.height - 140, "player");
  game.physics.enable(player, Phaser.Physics.ARCADE);
  player.body.collideWorldBounds = true;

}


function checkPlayerDeath() {

  // ==================================================================
  // Check if the player fell off the world.
  if (player.body.y > game.world.height - 50) {
    player.reset(32, game.world.height - 200);
  };
}

function createPlayerAnimations() {
  // Sets the player collision box.
  // @params (X, Y, Offset-X, Offset-Y)
  player.body.setSize(25, 46, 22, 15);

  // ==================================================================
  // Player animation frames
  player.animations.add("left", [0, 1, 2, 3, 4, 5, 6, 7, 8], 15, true);
  player.animations.add("right", [9, 10, 11, 12, 13, 14, 15, 16, 17], 15, true);

  // ==================================================================
  // Sets the camera to follow the player
  game.camera.follow(player);
}



function claudiaArea() {

  if (map.getTileWorldXY(player.x, player.y, 70, 70, layers[7]) != null) {

    if (!talkingTo.claudia) {
      talkingTo.claudia = true;
      if (questItems.ball == null) {
        text = game.add.text(player.x - 150, player.y - 150, claudia.before, textStyle);
        questItems.guitar = game.add.tileSprite(30, 30, 70, 70, "guitar");
        questItems.guitar.fixedToCamera = true;
      } else {
        text = game.add.text(player.x , player.y - 150, claudia.after, textStyle);
      }
    }
  }
  if (talkingTo.claudia && map.getTileWorldXY(player.x, player.y, 70, 70, layers[7]) == null) {
    talkingTo.claudia = false;
    console.log("not talking and exit area!")
    text.destroy();
  }
}




function daniArea() {
  if (map.getTileWorldXY(player.x, player.y, 70, 70, layers[5]) != null) {
    if (!talkingTo.daniel) {
      talkingTo.daniel = true;
      if (questItems.guitar == null) {
        text = game.add.text(player.x - 300, player.y - 150, daniel.before, textStyle);
      } else {
        if (questItems.ball == null) {
          questItems.guitar.destroy();
          questItems.ball = game.add.tileSprite(30, 30, 70, 70, "ball");
          questItems.ball.fixedToCamera = true;
        }
        text = game.add.text(player.x - 300, player.y - 150, daniel.after, textStyle);
      }
    }
  }
  if (talkingTo.daniel && map.getTileWorldXY(player.x, player.y, 70, 70, layers[5]) == null) {
    talkingTo.daniel = false;
    text.destroy();
  }
}

function antoArea() {
  if (map.getTileWorldXY(player.x, player.y, 70, 70, layers[8]) != null) {
    if (!talkingTo.anto) {
      talkingTo.anto = true;
      if (questItems.ball == null) {
        text = game.add.text(player.x - 300, player.y - 150, anto.before, textStyle);
      } else {
        if (questItems.ladder == null) {
          questItems.ball.destroy();
          questItems.ladder = game.add.tileSprite(30, 30, 70, 70, "ladder");
          questItems.ladder.fixedToCamera = true;
        }
        text = game.add.text(player.x - 300, player.y - 150, anto.after, textStyle);
      }
    }
  }
  if (talkingTo.anto && map.getTileWorldXY(player.x, player.y, 70, 70, layers[8]) == null) {
    talkingTo.anto = false;
    text.destroy();
  }
}

function lopoArea() {
  if (map.getTileWorldXY(player.x, player.y, 70, 70, layers[9]) != null) {
    if (!talkingTo.lopo) {
      talkingTo.lopo = true;
      if (questItems.ladder == null) {
        text = game.add.text(player.x - 300, player.y - 150, lopo.before, textStyle);
      } else {
        if (questItems.beer == null) {
          questItems.ladder.destroy();
          questItems.beer = game.add.tileSprite(30, 30, 70, 70, "beer");
          questItems.beer.fixedToCamera = true;
        }
        text = game.add.text(player.x - 300, player.y - 150, lopo.after, textStyle);
      }
    }
  }
  if (talkingTo.lopo && map.getTileWorldXY(player.x, player.y, 70, 70, layers[9]) == null) {
    talkingTo.lopo = false;
    text.destroy();
  }
}


function campeloArea() {
  if (map.getTileWorldXY(player.x, player.y, 70, 70, layers[10]) != null) {

    if (!talkingTo.campelo) {
      talkingTo.campelo = true;
      if (questItems.beer == null) {
        text = game.add.text(player.x - 300, player.y - 150, campelo.before, textStyle);
      } else {
        if (questItems.key == null) {
          questItems.beer.destroy();
          questItems.key = game.add.tileSprite(30, 30, 70, 70, "key");
          questItems.key.fixedToCamera = true;
        }
        text = game.add.text(player.x - 300, player.y - 150, campelo.after, textStyle);
      }
    }
  }
  if (talkingTo.campelo && map.getTileWorldXY(player.x, player.y, 70, 70, layers[10]) == null) {
    talkingTo.campelo = false;
    text.destroy();
  }
}

function surfArea() {
  if (map.getTileWorldXY(player.x, player.y, 70, 70, layers[6]) != null) {

    if (!talkingTo.surf) {
      talkingTo.surf = true;
      if (questItems.key == null) {
        text = game.add.text(player.x - 300, player.y + 150, surf.before, textStyle);
      } else {
        if (questItems.searching) {
          if (questItems.surf == null) {
            questItems.key.destroy();
            questItems.surf = game.add.tileSprite(30, 30, 70, 70, "surf");
            questItems.surf.fixedToCamera = true;
          }
          text = game.add.text(player.x - 300, player.y + 150, surf.after, textStyle);
        }
      }
    }
  }
  if (talkingTo.surf && map.getTileWorldXY(player.x, player.y, 70, 70, layers[6]) == null) {
    talkingTo.surf = false;
    text.destroy();
  }
}

function academiaArea() {
  if (map.getTileWorldXY(player.x, player.y, 70, 70, layers[11]) != null) {
    if (!talkingTo.academia) {
      talkingTo.academia = true;
      if (questItems.key == null) {
        text = game.add.text(player.x - 500, player.y - 150, academia.before, textStyle);
      } else {

        if (questItems.surf == null) {
          questItems.searching = true;
          text = game.add.text(player.x - 500, player.y - 150, academia.after, textStyle);
        } else {
          text = game.add.text(player.x - 500, player.y - 150, academia.after2, textStyle);

          //TODO Change the state of game to a You win! screen.
        }
      }
    }
  }
  if (talkingTo.academia && map.getTileWorldXY(player.x, player.y, 70, 70, layers[11]) == null) {
    talkingTo.academia = false;
    text.destroy();
  }
}

function checkPlayerAreas() {

  claudiaArea();
  daniArea();
  antoArea();
  lopoArea();
  campeloArea();
  academiaArea();
  surfArea();

}
