import Player from '@game/player.js';

export default class Computer extends Player {
  constructor(numberLength) {
    if (Computer.exists) {
      return Computer.instance;
    }

    super(numberLength);
    this.init();
    Computer.instance = this;
    Computer.exists = true;

    return this;
  }

  init() {
    this.numbers = this.#getRandomNumbers();
  }

  #getRandomNumbers(min = 1, max = 9) {
    let numbers = '';

    while (numbers.length < this.numberLength) {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);

      if (numbers.indexOf(randomNumber) === -1) {
        numbers += randomNumber;
      }
    }

    return numbers;
  }
}
