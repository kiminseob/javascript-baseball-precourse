import CONFIG from '@config/constants.js';

export default class BaseballGame {
  #numberLength
  #count

  constructor(numberLength) {
    this.#numberLength = numberLength;
    this.#count = null;
  }

  get numberLength() {
    return this.#numberLength;
  }

  play(computerInputNumbers, userInputNumbers) {
    this.#setCountBallAndStrike(computerInputNumbers, userInputNumbers);

    return this.#getResultMessage();
  }

  #getResultMessage() {
    const {ball, strike} = this.#count;
    let resultMessage;

    if (strike === this.#numberLength) {
      resultMessage = CONFIG.RESULT.ANSWER;
    } else if (ball === 0 && strike === 0) {
      resultMessage = CONFIG.RESULT.NOTHING;
    } else if (ball > 0 && strike > 0) {
      resultMessage = `${ball}${CONFIG.RESULT.BALL} 
                       ${strike}${CONFIG.RESULT.STRIKE}`;
    } else if (ball > 0) {
      resultMessage = `${ball}${CONFIG.RESULT.BALL}`;
    } else {
      resultMessage = `${strike}${CONFIG.RESULT.STRIKE}`;
    }

    return resultMessage;
  }

  isEnd() {
    return this.#count.strike === this.#numberLength;
  }

  #setCountBallAndStrike(computerInputNumbers, userInputNumbers) {
    this.#count = {
      ball: 0,
      strike: 0,
    };

    computerInputNumbers.forEach((computerInputNumber, computerNumberIndex) => {
      const userNumberIndex = userInputNumbers.indexOf(computerInputNumber);

      if (userNumberIndex === -1) {
        return;
      }

      if (userNumberIndex === computerNumberIndex) {
        ++this.#count.strike;
      } else {
        ++this.#count.ball;
      }
    });
  }
}
