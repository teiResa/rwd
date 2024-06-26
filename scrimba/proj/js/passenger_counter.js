/* 2024-06-17  following the Scrimba course ( https://v2.scrimba.com/learn-javascript-c0v/~07 ) to prepare to resume the FreeCodeCamp course. I finally have access again. */

/*
 Mixing HTML structure and JS functionality can lead to code that is hard to maintain and manage. Using HTML's onclick is intuitive, however  there is a better way.
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// document.getElementById("count").innerText = 5

/*
let count = 0 
console.log(count)
*/
/*
let myAge = 29
console.log(myAge)
*/

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

/*
let myAge = 29
let humanDogRatio = 7

let myDogAge = myAge * humanDogRatio

console.log(myDogAge)
*/

// let count = 5
//  count = count + 1
//  // does all of the math eqns, not just last
//  // unlike in math, js doesn't cancel itself out by being on both sides of the = sign.
//  console.log(count)


//  let bonusPoints = 50
//  console.log(bonusPoints)
//  bonusPoints = bonusPoints * 2
//  console.log(bonusPoints)
//  bonusPoints = bonusPoints / 4
// console.log(bonusPoints)
// bonusPoints = bonusPoints * 3 - 5
// console.log(bonusPoints)

/*
 function fourtyTwo() {
  console.log(42)
 }

 fourtyTwo()
*/

//initialise count as 0
// listen for clicks of the incrment button (give html onclick listener)
//increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

/*

function increment() {
 //this function is called in the HTML "increment-btn" button's onclick event listener

 console.log("the button was clicked")
}

*/


// initialise the count as 0
// listen for clicks on the increment button
// incrmnt the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

//let count = 0
//let countEl = document.getElementById("count-el")
// took scraps from this : // document.getElementById("count").innerText = 5

// methods (.getElementById and .log) are functions that are hooked onto objects (document and console) and the <<  ("count")  >> is called "passing an argument", which just means giving the function some data to play with

//document.getElementById("count-el") is "working with the DOM (Document Object Model)", which is just like saying "how  you use JS to modify a website". The html page is the document, which is an object (it's datatype is object), and model, which is just a representation of the html element in js. So,
// DOM said in English is the sentence "how to use js to modify websites."


let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")
console.log(saveEl)

function increment() {
 // console.log("button works")
 //count = count + 1
 count += 1
 countEl.textContent = count

 console.log(count)
}

function save() {
 console.log(count)
 let saveCount = count + " - "
 //was .innerText, but it is resource wasteful, and only shows human-readable content. Nothing hidden, so no un-sandwiched spaces.
 saveEl.textContent += saveCount

 count = 0
 countEl.textContent = 0
}
//calling it a night ... this is where I left off (" https://v2.scrimba.com/learn-javascript-c0v/~0r ")

// document.getElementById("count-el").innerText = count


/*
let username = "per"
let message = "You have three new notifications"
let messageToUser = message + ", " + username + "."
console.log(messageToUser)
*/

// let username = "Seymour Peemour"
// string > number, so if you force a number to concatinate with a string, the number becomes a string too.
let username = 42
let greeting = "Hi, I love you, "
let myGreeting = greeting + username
console.log(myGreeting)

/*
let points = 4
let bonusPoints = "10"
// if bonusPoints = "10" the numbers within the quotations is a string, so the whole thing becomes at concationation would be a string. String always wins. 
let totalPoints = points + bonusPoints

console.log(totalPoints)


console.log(4 + 5) // returns: 9 as a number datatype
console.log("2" + "4") //returns: 24 as a string datatype
console.log("5" + 1) //returns: 51 as a string datatype
console.log(100 + "100") //returns: 100100 as a string datatype

*/












