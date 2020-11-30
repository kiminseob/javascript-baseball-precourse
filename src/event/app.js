import CONFIG from '@config/constants.js';
import User from '@game/user.js';
import Computer from '@game/computer.js';
import BaseballGame from '@game/baseballgame.js';
import {InputError} from '@error/input-error.js';

function endGameEvent() {
  document.getElementById('game-restart-button').style.display = 'inline-block';
  document.getElementById('submit').disabled = true;
}

export function submitEvent() {
  const baseballGame = new BaseballGame(CONFIG.NUMBER_LENGTH);
  const computer = new Computer(baseballGame.numberLength);
  const user = new User(baseballGame.numberLength);

  try {
    user.numbers = document.getElementById('user-input').value;
    const result = baseballGame.play(computer.numbers, user.numbers);
    document.getElementById('result').innerHTML = result;

    if (baseballGame.isEnd()) {
      endGameEvent();
    }
  } catch (error) {
    if (error instanceof InputError) {
      alert(error.cause.message);
    } else {
      alert(error.message);
    }
  }
}
