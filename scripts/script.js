'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
const initialScore = 20
let score = initialScore
let highScore = 0

document.querySelector('.score').textContent = initialScore

// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  // reset variables
  score = initialScore
  secretNumber = Math.trunc(Math.random() * 20) + 1
  // reset styles
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
  // reset content
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score
})

// CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  // there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No secretNumber!'
    // win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number!'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }

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
