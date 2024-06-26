//https://v2.scrimba.com/learn-javascript-c0v/~03s/



const inputEl = document.getElementById("input-el")
let myLeads = [
// "dummy data" is put temperarily to help with set-up
"google.com", "applejacks.com", "greatlead.cn.co"
]
const ulEl = document.getElementById("ul-el")




/* Is this amature hour? Use the element's id 
function input() {
 console.log("inputEl clicked")
} */

let inputBtn = document.getElementById("input-btn").addEventListener("click", function(){
 console.log("event listener button")
 // push the value of the input of input-el (inputEl)

 myLeads.push(inputEl.value)


 //myLeads.push("www.awesomelead.com")
 console.log(myLeads)
})

/* Const vs let

Const is non-rewritable, once declared, the value is it's always value. Let is rewritable, and a let looks like you intend for it to be reassigned. 

If possible, use const. Else, use let.
*/


// to render out the items in a n Array, you first need to loop through the items.

for (let i = 0; i < myLeads.length; i++) {
 // Not, ulEl.textContent = myLeads[i] , remember it updates while removing the prior value

 // ulEl.textContent += myLeads[i] + " "
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

}

// write you first innerHTML

// https://v2.scrimba.com/learn-javascript-c0v/~041
