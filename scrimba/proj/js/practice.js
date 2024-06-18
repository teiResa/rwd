// Day 02 ~~~~~ Practice 1 

//       Create who variables, firstName and lastName. Concatinate the two variables into a third variable called fullName. Log fullName in the console.

let firstName = "Mia"
let lastName = "Ou"

let fullName = firstName + " " + lastName 
console.log(fullName)

// Day 02 ~~~~~ Practice 2

let name = "Linda"
let greeting = "Hi there"

//        Create a function that logs out "Hi there, Linda!" when called. Use the variables immediately above.

/*   NOT A FUNCTION. PAY ATTENTION.
let message = greeting + ", " + name + "!"
console.log(message)
*/

function messageLinda() {
 /*
 let message = greeting + ", " + name + "!"
console.log(message)
*/

// even cleaner:
console.log(greeting + ", " + name + "!")
}

messageLinda()

// Day 02 ~~~~~ Practice 3

let myPoints = 3
console.log("starting:" + myPoints)
//         Increment and Decrement time. Create two funtions called add3Points() and remove1Point(), which add/remove points from the myPoints (user's points tally) veriable. Call the function with console.log(myPoints). Call the funtions to make myPoints ten.

function add3Points() {
 myPoints += 3
}


function remove1Point() {
 myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log("10 points goal ="+ " " + myPoints)

// Day 2 ~~~~~ Practice 4

// Predict what each line will log out
console.log("2" + 2)   //22 string
console.log(11 + 7)    //18 number
console.log(6 + "5")   //65 string
console.log("My points: " + 5 + 9)   //"My points: 59" string
console.log(2 + 2)     //4 number
console.log("11" + "14") //1114 string

// Day 2 ~~~~~ Practice 5

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let errorEl = document.getElementById("error")
function submitPurchase() {
  console.log("submitted")
/*
      function error() {
        // let errorEl = document.getElementById("error")
        errorEl.textContent = "Something went wrong, please try again"
      }
        
error() 
*/

errorEl.textContent = "Something went wrong, please try again"
}

// Day 2 ~~~~~ Practice 6

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")


function add() {
 console.log("add clicked")
 let calcedSum = num1 + num2
 console.log(calcedSum)
 sumEl.textContent = "Sum: " + calcedSum
}

function subtract() {
 console.log("subtract clicked")
 let calcedSum = num1 - num2
 console.log(calcedSum)
 sumEl.textContent = "Sum: " + calcedSum
}

function divide() {
 console.log("divide clicked")
 let calcedSum = num1 / num2
 console.log(calcedSum)
 sumEl.textContent = "Sum: " + calcedSum
}

function multiply(){
 console.log("multiply clicked")
 let calcedSum = num1 * num2
 console.log(calcedSum)
 sumEl.textContent = "Sum: " + calcedSum
}


//sumEl.textContent(calcedSum)

