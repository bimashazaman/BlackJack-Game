let firstCard = 5
let SecCard = 10
let cards = [firstCard, SecCard]
let sum = firstCard + SecCard
let HasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let SumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

function startGame() {
  cardsEl.textContent = 'Cards : ' + cards[0] + ' and ' + cards[1]
  SumEl.textContent = 'Sum: ' + sum

  if (sum <= 21) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 24) {
    message = 'you have got black jack'
    HasBlackJack = true
  } else {
    message = 'you have loose your game'
    isAlive = false
  }

  messageEl.textContent = message
}

function newCARD() {
  let card = 3

  sum += card
  cards.push(card)

  startGame()
}
