//      https://v2.scrimba.com/learn-javascript-c0v/~03s/

const inputEl = document.getElementById("input-el")
let myLeads = [
// "dummy data" is put temperarily to help with set-up
//"google.com", "applejacks.com", "greatlead.cn.co"
]
let oldLeads = []
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


// check if leadsFromLocalStorage is truthy (["example", "example"]) or falsy (null)
//if so, set myLeads to its value and call render()

if (leadsFromLocalStorage) {
 // mistake: I had leadsFromLocalStorage === true, but that is too much code for asking whether the variable is a truthy. Just it's name will let us know.
 console.log("leads found (truthy)")
 myLeads =  leadsFromLocalStorage 
 render(myLeads)
} else{
 console.log("its falsy. No leads found.")
}

console.log(leadsFromLocalStorage)

/*
const tabs = [
 {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]
*/

tabBtn.addEventListener("click", function(){
// using google API, grab the tab URL
// https://stackoverflow.com/questions/6132018/how-can-i-get-the-current-tab-url-for-chrome-extension

/*
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
 //chrome.tabs is an API, so it can only be run in the context of being a chrome tab. Chrome.tabs is undefined unless viewing as an extension.
 // since only one tab should be active and in the current window at once
 // the return variable should only have one entry
 let activeTab = tabs[0]
 let activeTabId = activeTab.id // or do whatever you need
});
*/

// specify which tab to query inside of the {}s using an object, active: true gives the active tab, currentWindow: true specifies the avctive window too.
// the function is triggered once chrome finds the requsted window's active tab, which will give us a tabs variable.
chrome.tabs.query({active: true, currentWindow: true }, function(tabs){

  // Now that we have the tabs variable: push the tab's url to myLeads array, save to storage (key:stringify the value), and call the render.

  myLeads.push(tabs[0].url) 
  localStorage.setItem("myleads", JSON.stringify(myLeads))
  render(myLeads)




})



 // get the 0th position of the array and convert the value (of the key:value pair) to an url
 //console.log(tabs[0].url)

 // save the url instead of just logging it out
 // save it to .localStorage, add to the myLeads array, and trigger a render
 myLeads.push(tabs[0].url)

 //     https://v2.scrimba.com/learn-javascript-c0v/~053

 //save the myLeads array to localStorage
 localStorage.setItem("myLeads", JSON.stringify(myLeads))

 render(myLeads)
 // console.log(localStorage.getItem("myLeads"))

}) 

 // very anxious about going to the hospital tomorrow. 2024-07-03
/* Using localStorage

localStorage.setItem("key", "value")
Please note: both key and value have to be strings
localStorage.getItem("key")
localStorage.clear()

if there is nothing to return, the console says NUll. IT is a falsy. If it returns the array, it is a truthy.

JS's falsy values are of 6 possibilities:
false, 0, "" (an empty string), null, undefined, and NaN (Not a number)

Null vs undefined
both are primative datatypes, just like strings and numbers.
both are ways to signalise emptiness

null -> developer signalises emptiness to others and JS
undefines -> javascript signalises emptiness others and devs

// https://v2.scrimba.com/learn-javascript-c0v/~04m

// Build a Chrome Extension > Truthy and falsy values

check whether truthy of falsy 
let trueOrFalse = boolean("hello")
console.log(trueOrFalse)

boolean(" // value to check ")
*/

/*
console.log( Boolean("") ) //t or f? f ... f
// an empty sting is false
console.log( Boolean("0") ) // t  ... t
// in "", 0 is a sting, so it is true
console.log( Boolean(100) ) // f ... t
// 100 is a number, so truthy
console.log( Boolean(null)) // f  ... f
// null is false, because it one of the six falsies
console.log( Boolean([0]))    // t  ... t
// an [] is an array, so truthy
console.log(Boolean(-0))    // f ... f
// 0, regardless of negative, is always false
*/

// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log(localStorage.getItem("myLeads"))

//localStorage.setItem("userName", "Theresa B")
//console.log(localStorage.getItem("userName"))
// localStorage.clear()

/* Storing an array in localStorage

As localStorage only supports strings, you must use json.stringify() and json.parse()

var names=[]
names[0] = prompt("New member name?")
//takes the array and turns it into an array (stringifys it; array --> string)
localStorage.setItem("names", JSON.stringify(names))
//...
// reverses stringification, so array is turned back into an array (string --> array)
var storedNames = JSON.parse(localStorage.getItem("names"))
*/
/*
myLeads = JSON.parse(myLeads)
myLeads.push("www.epicleads.com")
// typeof reports back what the datatype of the variable is
console.log(typeof myLeads)
*/

/*
// string --> array
myLeads = JSON.parse(myLeads)
// push a new value to the array
myLeads.push("www.theresalead.ca")
// array --> string
myLeads = JSON.stringify(myLeads)
//log out and check datatype is a string
console.log(typeof myLeads)
*/


/* Is this amature hour? Use the element's id 
function input() {
 console.log("inputEl clicked")
} */

inputBtn.addEventListener("click", function(){
 console.log("event listener button")
 // push the value of the input of input-el (inputEl)

 myLeads.push(inputEl.value)

 //myLeads.push("www.awesomelead.com")
 // console.log(myLeads)
 
 //clear input field on click by setting its value to "" after the value is pushed to the array
 inputEl.value = ""
 //save the myLeads array to localStorage
 localStorage.setItem("myLeads", JSON.stringify(myLeads))

 render(myLeads)
 console.log(localStorage.getItem("myLeads"))
})

deleteBtn.addEventListener("dblclick", function() {
 myLeads = []
 localStorage.clear()
 render(myLeads)

 console.log("double clicked")
})

/* Improving your code with function parameters

*/

/* Const vs let

Const is non-rewritable, once declared, the value is it's always value. Let is rewritable, and a let looks like you intend for it to be reassigned. 

If possible, use const. Else, use let.
*/




// to render out the items in an Array, you first need to loop through the items.
/*
for (let i = 0; i < myLeads.length; i++) {


 // Not, ulEl.textContent = myLeads[i] , remember it updates while removing the prior value

 // ulEl.textContent += myLeads[i] + " "
  
 // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"


//Use createElement() and append() instead of innerHTML. Together they are used together commonly.
// write it first innerHTML, then in the new way. What does ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" mean? Well, in steps we 1) create an element, 2) set text content, then 3) append to the ul.
/*
// create element
const li = document.createElement("li")
// set text content
li.textContent = myLeads[i]
// append to the ul element
ulEl.append(li)
*/

//  const li = document.createElement("li").textContent = myLeads[i] 
// ^^^ would have the li elements list horizonatally without spacing or bullets. It doesn't work, because that would be redundant.

// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

// after creating a variable called listItems, which will hold the HTML for the list items (Empty for now), add the item to the listItems variable instead of the ulEl.innerHTML. Then render the listItems inside the ul using ulEl.innerHTML
//listItems = "<li>" + myLeads[i] + "</li>"

// mistake:  (but i think it worked either way)
// listItems = "<li>" + myLeads[i] + "</li>"
// ulEl.innerHTML += listItems
/*
listItems += "<li>" + myLeads[i] + "</li>"
/*
// and then render out outside of the {} block 

/* Was the performant way to do .innerHTML inside of the for loop, remember this sentence:

" DOM manipulation comes with a cost "

and with that you can ask whether it is better to use .innerHTML three times within the loop or to use it once outside of the for loop. If it has a cost, you would prefer to do it just once. Just remember that DOM manipulation has a cost.
*/
/*
}
ulEl.innerHTML = listItems
*/







/* lines 44 to 90, but without the notes. */

// https://v2.scrimba.com/learn-javascript-c0v/~051/ to see refactoring of renderLeads() to use the leads parameter
function render(leads) {
 let listItems = "" // empty string
 
for (let i = 0; i < leads.length; i++) { 
   // My method: (teacher Perr's was identical)
       // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
     // remember that "" and '' have to complete their pairings

     listItems += `
         <li>
            <a href='${leads[i]}' target='_blank'>
                 ${leads[i]} 
            </a>
         </li>
      `




}
ulEl.innerHTML = listItems

}

// Template strings (aka template literals)
// replace the quotes that wrap the string with backticks instead (`` (same button as ~))

// listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"

// becomes, with the benefit of allowing formatting to look like proper HTML

/*
listItems += `
<li>
   <a href='${myLeads[i]}' target='_blank'>
        ${myLeads[i]} 
   </a>
</li>
`
*/




















// https://v2.scrimba.com/learn-javascript-c0v/~041

