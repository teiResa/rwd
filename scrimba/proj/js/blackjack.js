let player = {
 name: "Theresa",
 chips: 69420
}

let cards = [] // an empty array
//let cards = [firstCard, secondCard] //array - ordered list of items
let sum = 0
// let userAge = 21
let hasBlackJack = false
let isAlive = false
let message = ""  //an empty string
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": " + "€" + player.chips


console.log(cards)


function getRandomCard() {
 // ace is 11, but you can make it both 1 and 11 later.
 let randomNumber = Math.floor(Math.random() * 13) + 1

 if ( randomNumber >= 11 ) {
  return 10
 } else if ( randomNumber === 1 ){
return  11
 }else {
 return randomNumber 
 }
  
 
}
/*
function rollDice() {
 let randoNum = Math.floor(Math.random() * 6) + 1
 console.log(randoNum)
}

*/

function startGame() {
 isAlive = true

 let firstCard = getRandomCard()
 let secondCard = getRandomCard()
 cards = [firstCard, secondCard]
 sum = firstCard + secondCard

renderGame()
/*
 let firstCard = getRandomCard()
let secondCard = getRandomCard()
//let thirdCard = 9 //9
let cards = [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard
// let userAge = 21
let hasBlackJack = false
let isAlive = true
*/
}

function renderGame() {
   cardsEl.textContent = "Cards: "
    //  ^^^^ this line clears the cards on re-render so it just says the label part

 //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
 //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
 for (let i = 0; i < cards.length; i++) {
  cardsEl.textContent += cards[i] + " "
  console.log(cards)
 }



 sumEl.textContent = "Sum: " + sum

//console.log("start button clicked")
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
  let thirdCard = getRandomCard()

  /* This part would have been cleaner~~~~~~~~~
  sum = firstCard + secondCard + thirdCard

  This part was not DRY (Don't repeat yourself ~~~~~~~~~~~)
  sumEl.textContent = "Sum: " + sum
  */

  // is alive and does not have blackjack
  if (isAlive === true && hasBlackJack === false) {
        sum += thirdCard
        cards.push(thirdCard)
        console.log(cards)
        renderGame()
  }
 
}
