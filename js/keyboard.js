var jumpTimer = 0;
var cursors;
var jumpButton;

function createKeys() {
  // ==================================================================
  // Create game buttons
  cursors = game.input.keyboard.createCursorKeys();
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  debugButton = game.input.keyboard.addKey(Phaser.Keyboard.C);
}


function playerMovement() {
  // ==================================================================
  // Handles the player movement
  player.body.velocity.x = 0; // makes the player stop if no key is being pressed

  if (cursors.left.isDown) {
    player.body.velocity.x = -650;
    player.animations.play("left");

    if (facing != "left") {
      facing = "left";
    }

    if (!player.body.onFloor()) {
      player.animations.stop();
      player.frame = 19;
    }

  } else if (cursors.right.isDown) {
    player.body.velocity.x = 650;
    player.animations.play("right");

    if (facing != "right") {
      facing = "right";
    }

    if (!player.body.onFloor()) {
      player.animations.stop();
      player.frame = 18;
    }

  } else {
    if (facing != "idle") {
      player.animations.stop();

      if (facing == "left") {
        player.frame = 0;
      } else {
        player.frame = 9;
      }
      facing = "idle";
    }
  }

  if (jumpButton.isDown && player.body.onFloor()) {
    player.body.velocity.y = -470;
    console.log(debugButton.isUp);
  }

  if (debugButton.isDown) {
    if (player.body.onFloor() && jumpTimer === 0) {
      jumpTimer = -1;
      player.body.velocity.y = -350;
    } else if (jumpTimer < 0 && jumpTimer > -30) {
      jumpTimer--;
      player.body.velocity.y = -300 + jumpTimer;
      console.log(player.body.velocity.y)
    }
  } else {
    jumpTimer = 0;
  }

  //  holdToJump(); // TODO Fix the awkward delay.

  // =======================================================
  // Mock "Fly mode" for debugging
  /*  if (debugButton.isDown) {
        player.body.velocity.y = -200;
      }
  */
}


// ===========================================================
// works but the delay feels awkward.
function holdToJump() {

  if (player.body.onFloor() && debugButton.isDown && jumpTimer > -200) {
    jumpTimer -= 3;
    console.log("doing jumptimer stuff");
  }
  if (debugButton.isUp && jumpTimer < 0) {
    player.body.velocity.y = (-400 + jumpTimer);
    jumpTimer = 0
    console.log("button Up");
  }

}
