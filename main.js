// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
//     //Your code goes here
// }

// //Call method here with parameters


function findWords(dogStr,dogName){
    let end=false
    for (const nameo of dogName){
        if (dogStr.search(nameo)>=0){
            console.log(`Matched ${nameo}!`)
            end = true
        }
    }
    if (end==false){
        console.log('No Matches')
    }
}
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
findWords(dog_string,dog_names)

// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

// Given arr == C

// function replaceEvens(arr){
//     //code goes here
// }

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

function evenIndex(listo){
    for (let i=0; i<listo.length; i++){
        if (i%2===0){
            listo.splice(i,1,'Even Index')
        }
    }
    return listo
}

let arr=["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(evenIndex(arr))

