let firstCard = 5
let secondCard = 7
//let thirdCard = 9 //9

let cards = [firstCard, secondCard] //array - ordered list of items

// let userAge = 21
let hasBlackJack = false
let isAlive = true
let message = ""  //an empty string
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let sum = firstCard + secondCard

function startGame() {
 renderGame()
}

function renderGame() {

 //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
 //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
 for (let i = 0; i < cards.length; i++) {
  cardsEl.textContent += cards[i] + " "
  //console.log(cards)
 }



 sumEl.textContent = "Sum: " + sum

console.log("start button clicked")
if (sum < 21) { //   <= 20
  message = "Another card?" //😁
} else if (sum === 21) {
  message = "Congratulations! Blackjack!" //😎🎆
  hasBlackJack = true
} else {
 message = "Lost. Another round? " //💀
 isAlive = false
}
messageEl.textContent = message
}

/*
if (userAge >= 21) {
 console.log("🍀 Good luck, Player! 🤞🏻")
} else {
 console.log("🤖Players must be 21 years or older. Admittance denied.🤖")
}
*/

/*
let oldAge = 100

if (oldAge === 100) {
 console.log("Here is your birthday card from the king!")
} else if (oldAge < 100) {
 console.log("Not elegible.")
} else {
 console.log("Not elegible, you have already gotten one.")
}
 */

//if they have a blackjack, they can cash out
console.log("blackjack?" + "      " + hasBlackJack)
console.log("cards alive?" + "    " + isAlive)


// f t f f t t f

function newCard () {
  console.log("nc poushed")
  let thirdCard = 9 //9

  /* This part would have been cleaner~~~~~~~~~
  sum = firstCard + secondCard + thirdCard

  This part was not DRY (Don't repeat yourself ~~~~~~~~~~~)
  sumEl.textContent = "Sum: " + sum
  */
  sum += thirdCard
  cards.push(thirdCard)
  console.log(cards)
  renderGame()
}
