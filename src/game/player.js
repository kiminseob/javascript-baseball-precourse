import {
  InputError, RangeError, LengthError, DuplicationError,
} from '@error/input-error.js';

export default class Player {
  #numbers
  #numberLength

  constructor(numberLength) {
    if (new.target === Player) {
      throw new Error('추상화 클래스 Player 인스턴스를 생성할 수 없습니다.');
    }

    this.#numbers = null;
    this.#numberLength = numberLength;
  }

  get numberLength() {
    return this.#numberLength;
  }

  get numbers() {
    return this.#numbers;
  }

  set numbers(inputNumbers) {
    try {
      if (this.#validInputNumbers(inputNumbers)) {
        this.#numbers = inputNumbers.split('').map(Number);
      }
    } catch (error) {
      if (error instanceof RangeError ||
          error instanceof LengthError ||
          error instanceof DuplicationError) {
        throw new InputError('Input Error', error);
      } else {
        throw error;
      }
    }
  }

  #validInputNumbers(inputNumbers) {
    const regex = /^[1-9]*$/g;

    if (!regex.test(inputNumbers)) {
      throw new RangeError();
    } else if (inputNumbers.length !== this.numberLength) {
      throw new LengthError();
    } else if (this.#existInputNumbers(inputNumbers)) {
      throw new DuplicationError();
    }

    return true;
  }

  #existInputNumbers(inputNumbers) {
    return inputNumbers.split('').some((number) =>
      inputNumbers.indexOf(number) !== inputNumbers.lastIndexOf(number),
    );
  }
}
