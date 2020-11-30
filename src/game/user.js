import Player from '@game/player.js';

export default class User extends Player {
  constructor(numberLength) {
    if (User.exists) {
      return User.instance;
    }

    super(numberLength);
    User.instance = this;
    User.exists = true;

    return this;
  }
}
