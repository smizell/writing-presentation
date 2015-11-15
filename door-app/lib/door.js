module.exports = {
  unlockDoor: function(door, user) {
    if (user.attributes.hasKey) {
      door.attributes.isLocked = false;
    }
    return door;
  },

  lockDoor: function(door, user) {
    if (user.attributes.hasKey) {
      door.attributes.isLocked = true;
    }
    return door;
  }
}
