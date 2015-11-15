Feature: Lockable doors for users with keys
  As a door own
  I want to be able restrict access through the door
  So that I can secure my area

  Scenario: User with key encounters locked door
    Given I am a user with a key
      And I encounter a locked door
    When I try to unlock the door
    Then The door should be unlocked

  Scenario: User with key encounters unlocked door
    Given I am a user with a key
      And I encounter an unlocked door
    When I try to lock the door
    Then The door should be locked

  Scenario: User without key encounters locked door
    Given I am a user without a key
      And I encounter a locked door
    When I try to unlock the door
    Then The door should be locked

  Scenario: User without key encounters unlocked door
    Given I am a user without a key
      And I encounter an unlocked door
    When I try to lock the door
    Then The door should be unlocked
