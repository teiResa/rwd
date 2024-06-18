let firstCard = 5
let secondCard = 7
let thirdCard = 9 //9

let userAge = 21
let hasBlackJack = false
let isAlive = true
let message = ""  //an empty string
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let sum = firstCard + secondCard + thirdCard

function startGame() {
 sumEl.textContent = "Sum: " + sum
 cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + thirdCard
console.log("button clicked")
if (sum < 21) {
  message = "Another card?" //😁
} else if (sum === 21) {
  message = "Congratulations! Blackjack!" //😎🎆
  hasBlackJack = true
} else {
 message = "Lost. Another round? " //💀
 isAlive = false
}
console.log(message)
messageEl.textContent = message
}

if (userAge >= 21) {
 console.log("🍀 Good luck, Player! 🤞🏻")
} else {
 console.log("🤖Players must be 21 years or older. Admittance denied.🤖")
}


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
