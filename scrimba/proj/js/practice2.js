/* Practice 1 of Practice Pad 2 */

let person = {
 name: "Theresa",
 age: 29,
 country: "China",
 nationality: "Canada"
}

function logData() {
 // return person.name + " is " + person.age + " years old and lives in " + person.country 
 console.log(person.name + " is " + person.age + " years old and lives in " + person.country )
}

// console.log(logData())
logData()

/* Practice 2 of Practice Pad 2 */
// Same result, but I wrote too much detail.

let age = 75

    if (age < 6) {
     console.log("free ride for small children under 6")
    //} else if (age > 6 && age < 17) {
    } else if (age < 18 ) {
     console.log("Child discount")
    //} else if (age > 17 && age < 26 ) {
    } else if (age < 27 ) {
     console.log("student discount")
    //} else if (age > 26 && age < 66 ) {
    } else if (age < 67 ) {
     console.log("full price")
    //} else if (age > 66 ) {
    } else {
     console.log("Senior citizen price")
    }

/* Practice 3 of Practice Pad 2 */

let largeCountries = ["China", "India", "United States", "Indonisa", "Pakistan"]


console.log("The 5 largest countries:")
for (let i = 0; i < largeCountries.length; i++ ) {
 //console.log(largeCountries)
 console.log("- " + largeCountries[i])
}


/* Practice 4 of Practice Pad 2 */

let largeCountries2 = ["Tuvalu", "India", "United States", "Indonisa", "Monaco"]

// .push() and .pop() work on the end of the array
// push adds while pop removes; unshift adds while shift removes.
//.shift() and .unshift() affects the beginning of array.

largeCountries2.pop()
largeCountries2.push("Pakistan")
largeCountries2.shift()
largeCountries2.unshift("China")

console.log("The 5 largest countries:")
for (let i = 0; i < largeCountries2.length; i++ ) {
 console.log("- " + largeCountries2[i])
}

/* Practice 5 of Practice Pad 2 */


let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
 console.log("🦇🫨")
}

/* Practice 6 of Practice Pad 2 */

//I did this top one for fun

let rock = "👊🏻"
let paper = "✋🏻"
let scissors = "✌🏻"

function draw() {
 let randomNum = Math.floor(Math.random() * 3) + 1
 console.log(randomNum)
if (randomNum === 1 ){
 console.log(rock)
} else if (randomNum === 2) {
 console.log(paper)
} else if (randomNum === 3) {
 console.log(scissors)
} else {
 console.log("rps failed")
}
}

draw()

//the actual assignment:
let hands = ["rock", "paper", "scissors"]

//console.log( hands.random() )

function handsies() {
 // My pre-research guess:
  //return hands[Math.floor(Math.random() * hands.length)]

  // My post-research:
  // hands.length is a less-static way because it adjusts with the array organically
  let rangeOfRandom = Math.floor(Math.random() * hands.length) 
  return hands[rangeOfRandom] 

  //Instructor Per's way
  //let randomIndex = Math.floor(Math.random() * 3)
  //return hands[randomIndex]
}

//console.log(handsies())

console.log(handsies())


/* Practice 7 of Practice Pad 2 */

let fighters = ["🦇", "👻",  "🤖", "💀", "🐉", "🐙", "🐠", "😶‍🌫️", "🤠", "🤡", "🥶", "👽", "💩"]
let stageEl = document.getElementById("stage")
let fightBtn = document.getElementById("fight-btn")

fightBtn.addEventListener("click", function() {
 
 let pickerA = Math.floor(Math.random() * fighters.length)
 let pickerB = Math.floor(Math.random() * fighters.length)
 
 //First attempt: Picks the same fighter both slots, so lets try two pickers.
 //return fighters[picker + " vs " + picker]
 //console.log(picker + " vs " + picker)

 //Second attempt: Works! Now just have it return emojis and not the spot in the array. And have it update the hmtl.
 //console.log(pickerA + " vs" + pickerB)
 console.log(pickerA + " vs " + pickerB + fighters[pickerA] + " vs " + fighters[pickerB] )
 

 //Third attempt: Updates html, now emoji time.
 // use the random number as an index to fetch an emoji from the array.
 stageEl.textContent = fighters[pickerA] + " vs " + fighters[pickerB] 
 
  
 // Mine but clean
/*
 let pickerA = Math.floor(Math.random() * fighters.length)
 let pickerB = Math.floor(Math.random() * fighters.length)
 console.log(pickerA + " vs " + pickerB)
 stageEl.textContent = fighters[pickerA] + " vs " + fighters[pickerB] 
*/

 // Instructor Per's
 /*
 let random2IndexOne = Math.floor(Math.random() * fighters.length )
 let random2IndexTwo = Math.floor(Math.random() * fighters.length )
 console.log(fighters[random2IndexOne] + " vs " + fighters[random2IndexTwo])
 stageEl.textContent = fighters[random2IndexOne] + " vs " + fighters[random2IndexTwo]
*/
})

/* Practice 8 of Practice Pad 2 */

let fruit = ["🍎", "🍊",  "🍎", "🍎", "🍊"] 
let appleShelf = document.getElementById("apple-shelf") 
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
 console.log("🍎", "🍊",  "🍎", "🍎", "🍊")

 for (i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
     appleShelf.textContent += "🍎"
    } else if (fruit[i] === "🍊") {
     orangeShelf.textContent += "🍊"
    }
}
}

sortFruit()