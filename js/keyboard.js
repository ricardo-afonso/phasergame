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
  }

  // =======================================================
  // Mock "Fly mode" for debugging
/*  if (debugButton.isDown) {
      player.body.velocity.y = -200;
    }
*/
}
