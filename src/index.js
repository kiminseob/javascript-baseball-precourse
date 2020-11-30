import {submitEvent, restartGametEvent} from '@event/app.js';

document.getElementById('app').addEventListener('click', (event) => {
  const targetId = event.target.id;

  if (targetId === 'submit') {
    submitEvent();
  } else if (targetId === 'game-restart-button') {
    restartGametEvent();
  }
});

document.getElementById('user-input').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('submit').click();
  }
});
