'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
const initialScore = 20
let score = initialScore
let highScore = 0

const updateDisplayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

const updateScore = function (score) {
  document.querySelector('.score').textContent = score
}

updateScore(initialScore)

// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  // reset variables
  score = initialScore
  secretNumber = Math.trunc(Math.random() * 20) + 1
  // reset styles
  document.querySelector('body').style.backgroundColor = '#eee'
  document.querySelector('.number').style.width = '15rem'
  // reset content
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  updateDisplayMessage('Start guessing...')
  updateScore(score)
})

// CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  // there is no input
  if (!guess) {
    updateDisplayMessage('⛔️ No secretNumber!')
    // win
  } else if (guess === secretNumber) {
    updateDisplayMessage('🏆 Correct Number!')
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      updateDisplayMessage(
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      )
      score--
      updateScore(score)
    } else {
      updateDisplayMessage('😭 You lost the game!')
      updateScore(0)
      document.querySelector('.number').textContent = '🤯'
    }
  }
})
