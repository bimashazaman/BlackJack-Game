let cards = []
let sum = 0
let HasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let SumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let player = {
  Name: 'per',
  Chips: '1000',
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.Name + ': $' + player.Chips

function getRandomCard() {
  let RandomNumber = Math.floor(Math.random() * 10)

  return RandomNumber
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = 'Cards : '
  cardsEl.textContent = 'Cards: '
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }
  SumEl.textContent = 'Sum: ' + sum

  if (sum <= 21) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 160) {
    message = 'you have got black jack'
    HasBlackJack = true
  } else {
    message = 'keep trying'
    isAlive = false
  }

  messageEl.textContent = message
}

function newCARD() {
  if (isAlive === true && HasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
