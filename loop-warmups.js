// en funktion som summerar alla tal i en array

// låt result vara 0
// för i från 0 till array.length - 1
//      result = result + array[i]
// return result

// function sum(arr) {
//     let result = 0

//     for (let i = 0; i < arr.length; i++) {
//         result = result + arr[i]
//         console.log('vi är i loopen och elementet har värdet ' + arr[i] + ' och result är ' + result)
//     }

//     return result
// }

// console.log(sum([5, 3, 7, 2])) // 15
function sum(arr){
let result = 0
let i = 0

while (i < arr.length ) {
    i++;
    result = result + arr[i]
    console.log('vi är i loopen och elementet har värdet ' + arr[i] + ' och result är ' + result)

}
return result

}

console.log(sum([5, 3, 7, 2]))
