//      https://v2.scrimba.com/learn-javascript-c0v/~03s/



const inputEl = document.getElementById("input-el")
let myLeads = [
// "dummy data" is put temperarily to help with set-up
//"google.com", "applejacks.com", "greatlead.cn.co"
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
 // console.log(myLeads)
 

 //clear input field on click by setting its value to "" after the value is pushed to the array
 inputEl.value = ""
 renderLeads()

})

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
function renderLeads() {
 let listItems = "" // empty string
 
for (let i = 0; i < myLeads.length; i++) { 
   // My method: (teacher Perr's was identical)
       // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
     // remember that "" and '' have to complete their pairings

     listItems += `
         <li>
            <a href='${myLeads[i]}' target='_blank'>
                 ${myLeads[i]} 
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

