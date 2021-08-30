'use strict'

const secretNumber = Math.trunc(Math.random() * 20) + 1
const initialScore = 20
let score = initialScore

document.querySelector('.score').textContent = initialScore
document.querySelector('.number').textContent = secretNumber

// handler function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)

  // there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No secretNumber!'
    // win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number!'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    // too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '😭 you lost the game!'
      document.querySelector('.score').textContent = 0
    }
    // too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game!'
      document.querySelector('.score').textContent = 0
    }
  }
})
