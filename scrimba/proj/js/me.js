let mySkills = ["Web Development", "Arduino", "UX/UI Design", "Graphic Design", "Photography", ]
let skillEl = document.getElementById("skills-el")
let myExperience = ["Frontend Development", "Brand Manager", "Graphic Design",  "Teacher", "Leader", "Former Pastry Chef", "Caterer", "Sales", "Customer Service"]
let experienceEl = document.getElementById("experience-el")



skillEl.textContent = mySkills //+ mySkills[1]
experienceEl.textContent = myExperience

/*
console.log(mySkills)

console.log(myExperience[1])
console.log(myExperience[2])
console.log(myExperience[0])
*/

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

//Counting in javascript
//Specify: 1)where to start, 2)where to stop, 3) shat is the step size (by ones, twos, tens, etc)

//        START         STOP         STEP
for (let count = 1; count < 11; count =+1){
 //starting at 1, stop before 11 (runs ten times), counting by ones
 console.log(count)
}