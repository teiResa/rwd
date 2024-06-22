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

