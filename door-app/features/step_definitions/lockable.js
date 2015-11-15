module.exports = function() {
  this.Given('I am a user with a key', function() {
    this.user = {
      element: 'user',
      attributes: {
        hasKey: true
      }
    };
  });

  this.Given(/^I am a user without a key$/, function () {
    this.user = {
      element: 'user',
      attributes: {
        hasKey: false
      }
    };
  });

  this.Given(/^I encounter a locked door$/, function () {
    this.door = {
      element: 'door',
      attributes: {
        isLocked: true
      }
    };
  });


  this.Given(/^I encounter an unlocked door$/, function () {
    this.door = {
      element: 'door',
      attributes: {
        isLocked: false
      }
    };
  });

  this.When(/^I try to unlock the door$/, function () {
    var unlockDoor = require('../../lib/door').unlockDoor;
    this.door = unlockDoor(this.door, this.user);
  });

  this.When(/^I try to lock the door$/, function () {
    var lockDoor = require('../../lib/door').lockDoor;
    this.door = lockDoor(this.door, this.user);
  });

  this.Then(/^The door should be unlocked$/, function (callback) {
    if (this.door.attributes.isLocked) {
      return callback(new Error('Door is locked'));
    }
    return callback();
  });

  this.Then(/^The door should be locked$/, function (callback) {
    if (!this.door.attributes.isLocked) {
      return callback(new Error('Door is unlocked'));
    }
    return callback();
  });
};
