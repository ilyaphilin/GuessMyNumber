'use strict';

const doc = document;
let scoreNumber = 5;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
doc.querySelector('.score').textContent = scoreNumber;
console.log(secretNumber);

// const displayMessage = function (message) {
//     document.querySelector('.message').textContent = message;
//   };

// doc.querySelector('.message').textContent = '🎉 Correct number!';
// doc.querySelector('.questionMark p').textContent = 3;
// doc.querySelector('.score').textContent = 12;
// doc.querySelector('.highscore').textContent = 17;
// doc.querySelector('.guess').value = 23;

doc.querySelector('.check').addEventListener('click', function () {
  let guess = Number(doc.querySelector('.guess').value);

  if (!guess) {
    doc.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    doc.querySelector('.message').textContent = '🎉 Correct number!';
    doc.querySelector('.highscore').textContent = scoreNumber;
    doc.querySelector('.questionMark p').textContent = secretNumber;
    doc.querySelector('.wrapper').style.background =
      'linear-gradient(to top left, #002008, #002206)';
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1 && guess > secretNumber) {
      doc.querySelector('.message').textContent = '📈 Too high!';
      scoreNumber--;
      doc.querySelector('.score').textContent = scoreNumber;
    } else if (scoreNumber > 1 && guess < secretNumber) {
      doc.querySelector('.message').textContent = '📉 Too low!';
      scoreNumber--;
      doc.querySelector('.score').textContent = scoreNumber;
    } else {
      scoreNumber--;
      doc.querySelector('.score').textContent = scoreNumber;
      doc.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }

  //   else if (guess > secretNumber) {
  //     doc.querySelector('.message').textContent = '📈 Too high!';
  //     scoreNumber--;
  //     doc.querySelector('.score').textContent = scoreNumber;
  //   } else if (guess < secretNumber) {
  //     doc.querySelector('.message').textContent = '📉 Too low!';
  //     scoreNumber--;
  //     doc.querySelector('.score').textContent = scoreNumber;
  //   }

  doc.querySelector('.again').addEventListener('click', function () {});
});
