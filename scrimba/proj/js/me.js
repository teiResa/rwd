/*
    - arrays are 0-indexed
    - .push(), .pop(), .length

    i is just a random variable name, it could have been any letter. See? t looks cool too.
               for ( let t = 0; t < 6; t += 1 ) {
                console.log(t)
               }



*/



/*

let mySkills = ["Web Development", "Arduino", "UX/UI Design", "Graphic Design", "Photography", ]
let skillEl = document.getElementById("skills-el")
let myExperience = ["Frontend Development", "Brand Manager", "Graphic Design",  "Teacher", "Leader", "Former Pastry Chef", "Caterer", "Sales", "Customer Service"]
let experienceEl = document.getElementById("experience-el")



skillEl.textContent = mySkills //+ mySkills[1]
experienceEl.textContent = myExperience
*/
/*
console.log(mySkills)

console.log(myExperience[1])
console.log(myExperience[2])
console.log(myExperience[0])
*/
/*
//i forgot to use []
let theresa = ["Theresa Dutrisac", 29, true]

let cards = [7, 4]

cards.push(6)
console.log(cards)

let messages = [
 "hey, how's it going?",
 "I'm alright, how about you?",
 "All good. Been working on my portfolio lately."
]

let newMessage = "same here!"

messages.push(newMessage)
console.log(messages)

messages.pop() //don't have to specify, i guess it takes off the last item??
console.log(messages)
*/
//Counting in javascript
//Specify: 1)where to start, 2)where to stop, 3) shat is the step size (by ones, twos, tens, etc)

/*
//        START         STOP         STEP
for ( let count = 10; count < 21; count += 1 ){
 //startih)ng at 1, stop before 11 (runs ten times), counting by ones
 console.log(count)
}

console.log("hey beech, hey")

for ( let t = 0; t < 6; t += 1 ) {
 console.log(t)
}

for (let h = 10; h < 101; h += 10) {
 console.log(
}
 */


let messages = [
 "hey, how's it going?",
 "I'm alright, how about you?",
 "All good. Been working on my portfolio lately.",
 "Same here!",
 "hahaha"
]

//Not DRY enough. And it doesn't scale (manually adding new array items)
//console.log(messages[0])
//console.log(messages[1])
//console.log(messages[2])
//console.log(messages[3])

// DRYer, but still would have to manually add array items.
//for (let i = 0; i < 5; i += 1) {
 //console.log(messages[i])
//}

//for (let i = 0; i < messages.length; i += 1) {
// console.log(messages[i])
//}

/*
let cards = [7, 3, 9]

for (i = 0; i < cards.length; i += 1) {
 //  i += 1 could be replaced with i++ . Increments i with one.
 console.log(cards[i])
}

*/

let sentence = ["hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (i = 0; i < sentence.length; i++) {
 //greetingEl.textContent = sentence
 // my guess ^^^^ eneded like -> hello ,my ,name ,is ,Per
 // if you did sentence[1], it would clear after each array item.
 greetingEl.textContent += sentence[i] + " "

 // How do you give spaces if they were not hard-coded into the array?
 // .split and .join? .slice? No, just concatinate one. ->    + " "
}

const welcomeEl = document.getElementById("welcome-el")
const welcomeEl2 = document.getElementById("welcome-el2")
const multiParas = document.getElementById("multi-paras")


//function greetUser(parameter) {...}
function greetUser(name) {
 welcomeEl.textContent = "welcome back, "+ name +""
}

function timeGreeting(greeting) {
 // welcomeEl2.textContent = " "+ greeting +" , Mr. Per Harald Borgen"

 welcomeEl2.textContent = greeting +" , Mr. Per Harald Borgen"
}

greetUser("Pierre")
timeGreeting("Morning!")


function greetyMulti(greety, namey, emojiy) {
 //multiParas.textContent = greety + ", " + namey + "🐙"
 /*
 multiParas.textContent = `
 ${greety}, ${namey} 🐙
 `
 */
 multiParas.textContent = `
 ${greety}, ${namey} ${emojiy}
 `
}

greetyMulti("Hi", "Joel Da Mole", "🐙")


function add(num0, num1) {
 // numFnParameter.textContent = sum
  
 //sum = ` ${num0} + ${num1} `
 return num0 + num1
}

console.log( add(3, 4)) // 7
console.log( add(9, 102)) // 111


//Arrays as Function Parameters

//Create a function, getFirst(arr), that returns the first item in the array
//arr === array, but as the only parameter


function getFirst(arr) {
 return arr[0]
}

//Call it with an array as an argument to verify that it works

console.log( getFirst(["cat", "dog", "fish"]))


//Perr's (adjusted not to mess with mine)

function getSecond(array1) {
 return array1[1] //0-indexed ... 1 is second spot
}

let secondCard = getSecond([2, 10, 5])


console.log(secondCard)