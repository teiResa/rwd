/* 2024-06-17  following the Scrimba course ( https://v2.scrimba.com/learn-javascript-c0v/~07 ) to prepare to resume the FreeCodeCamp course. I finally have access again. */

/*
 Mixing HTML structure and JS functionality can lead to code that is hard to maintain and manage. Using HTML's onclick is intuitive, however  there is a better way.
*/


let count = 0
let rows = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let rowsEl = document.getElementById("rows-el")

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
// look into reversing a string...



 saveEl.textContent += saveCount

 count = 0
 countEl.textContent = 0

 // When saved, also count how many times the save button has been clicked

 
  rows += 1
  rowsEl.textContent = rows
 console.log("number of rows:" + rows)
}
